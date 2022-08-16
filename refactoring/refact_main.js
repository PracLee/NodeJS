/**
 * @typedef Character
 * @property {string} slug
 * @property {string} polarity
 * @property {house} slug
 */

/**
 * @typedef House
 * @property {string} slug
 * @property {Character[]} members
 */

const https = require('https')

const GOTAPIPREFIX = 'https://game-of-thrones-quotes.herokuapp.com/v1'

/**
 * @param {string} url
 * @returns {*}
 */
async function getHttpsJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let jsonStr = ''
      res.setEncoding('utf-8')
      res.on('data', (data) => {
        jsonStr += data
      })
      res.on('end', () => {
        try {
          const parsed = JSON.parse(jsonStr)
          resolve(parsed)
        } catch {
          reject(new Error('The server response was nat a vaild JSON document'))
        }
      })
    })
  })
}

/**
 * @returns {Promise<House[]>}
 */
async function getHouses() {
  return getHttpsJson(`${GOTAPIPREFIX}/houses`)
}

/**
 * @param {string} quote
 * @returns {string}
 */
function sanitizeQuote(quote) {
  return quote.replace(/[^a-zA-Z0-9., ]/g, '')
}

/**
 *
 * @param {string} slug
 * @returns {Promise<string>}
 */
async function getMergedQuitesOfCharacter(slug) {
  const character = await getHttpsJson(`${GOTAPIPREFIX}/character/${slug}`)
  return sanitizeQuote(character[0].quotes.join('  '))
}

/**
 * @param {string} quote
 */
async function getSentimAPIResult(quote) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text: quote,
    })

    const postReq = https.request(
      {
        hostname: 'sentim-api.herokuapp.com',
        method: 'POST',
        path: '/api/v1/',
        headers: {
          Accept: 'application/json; encoding=utf-8',
          'Context-Type': 'application/json; encoding=utf-8',
          'Context-Length': body.length,
        },
      },
      (res) => {
        let jsonStr = ''
        res.setEncoding('utf-8')
        res.on('data', (data) => {
          jsonStr += data
        })
        res.on('end', () => {
          try {
            resolve(JSON.parse(jsonStr))
          } catch {
            reject(
              new Error('The server response was nat a vaild JSON document')
            )
          }
        })
      }
    )

    postReq.write(body)
  })
}

/**
 * @param {number[]} numbers
 * @returns {number}
 */
function sum(numbers) {
  return numbers.reduce((memo, curr) => memo + curr, 0)
}

async function main() {
  const houses = await getHouses()
  const characters = await Promise.all(
    houses
      .map((house) =>
        house.members.map((member) => {
          getMergedQuitesOfCharacter(member.slug).then((quote) => ({
            house: house.slug,
            character: member.slug,
            quote,
          }))
        })
      )
      .flat()
  )
  console.log(`houses : `, houses)

  const characterWithPolarity = await Promise.all(
    characters.map(async (character) => {
      const result = await getSentimAPIResult(character.quote)
      return {
        ...character,
        polarity: result.result.polarity,
      }
    })
  )
  console.log(`characterWithPolarity : `, characterWithPolarity)

  /** @type {Object.<string, Character[]>} */
  const characterByHouseSlugs = {}
  characterWithPolarity.forEach((character) => {
    characterByHouseSlugs[character.house] =
      characterByHouseSlugs[character.house] || []
    characterByHouseSlugs[character.house].push(character)
  })
  console.log(`characterByHouseSlugs : `, characterByHouseSlugs)

  const houseSlugs = Object.keys(characterByHouseSlugs)
  const result = houseSlugs
    .map((houseSlug) => {
      const charactersOfHouse = characterByHouseSlugs[houseSlug]
      if (!charactersOfHouse) {
        return undefined
      }
      const sumPolarity = sum(
        charactersOfHouse.map((character) => character.polarity)
      )
      const avaragePolarity = sumPolarity / charactersOfHouse.length
      return [houseSlug, avaragePolarity]
    })
    .sort((a, b) => a[1] - b[1])
  console.log(`result : `, result)
}

main()
