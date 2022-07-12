const fs = require('fs')

/*
fs.readFile('localSetting', 'utf-8', (error, value) => {
  //console.log(value)
})
*/
/**
 * @param {string} fileName
 */
function readFileInPromiss(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, value) => {
      if (error) {
        reject(error)
      }
      resolve(value)
    })
  })
}

//readFileInPromiss('localSetting').then((value) => console.log(value))

// node API
fs.promises
  .readFile('localSetting', 'utf-8')
  .then((value) => console.log(value))

async function main() {
  try {
    const result = await fs.promises
      .readFile('localSetting', 'utf-8')
      .then((value) => console.log(value))
    console.log(result)
  } catch (error) {
    console.log('error', error)
  }
}

main()
