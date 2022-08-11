/**
 * @typedef Character
 * @property {string} slug
 */

const https = require('https')
/**
 * @typedef House
 * @property {string} slug
 * @property {Character[]} members
 */

const GOTAPIPREFIX = 'https://game-of-thrones-quotes.herokuapp.com/v1'

/**
 *
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
 * @returns{Promise<string>}
 */
async function getMergedQuitesOfCharacter(slug) {
  const character = await getHttpsJson(`${GOTAPIPREFIX}/character/${slug}`)
  return sanitizeQuote(character[0].quotes.join('  '))
}

async function main() {
  const houses = await getHouses()
  houses.forEach((house) => {
    house.members.forEach((member) => {
      getMergedQuitesOfCharacter(member.slug).then((quotes) =>
        console.log(house.slug, member.slug, quotes)
      )
    })
  })
  console.log(houses)
}

main()
