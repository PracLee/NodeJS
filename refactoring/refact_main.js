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
 * @returns {Promise<House[]>}
 */
async function getHouses() {
  return new Promise((resolve) => {
    https.get(`${GOTAPIPREFIX}/houses`, (res) => {
      let jsonStr = ''
      res.setEncoding('utf-8')
      res.on('data', (data) => {
        jsonStr += data
      })
      res.on('end', () => {
        resolve(JSON.parse(jsonStr))
      })
    })
  })
}

/**
 *
 * @param {string} slug
 * @returns{Promise<string>}
 */
async function getMergedQuitesOfCharacter(slug) {
  return new Promise((resolve) => {
    https.get(`${GOTAPIPREFIX}/character/${slug}`, (res) => {
      let jsonStr = ''
      res.setEncoding('utf-8')
      res.on('data', (data) => {
        jsonStr += data
      })
      res.on('end', () => {
        const json = JSON.parse(jsonStr)
      })
    })
  })
}

async function main() {
  const houses = await getHouses()
  console.log(houses)
}

main()
