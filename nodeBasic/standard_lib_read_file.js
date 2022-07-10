const fs = require('fs')

const FILENAME = 'standard_lib_read_file.js'

// callback style : 비동기적인 리드
fs.readFile(FILENAME, 'utf-8', (err, result) => {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})

// sync style : 엄청나게 긴 시간을 기다려야 함
const result = fs.readFileSync(FILENAME, 'utf-8')
try {
  console.log(result)
} catch {
  console.error(error)
}

// Promise style : 많은 경우에 사용
async function main() {
  await fs.promises.readFile(FILENAME, 'utf-8')
}
main()

// promisify style : 구버전 node의 사용으로 promiss.readfile을 사용할 수 없을 때 사용
/*
const util = require('util')
async function promisify_main() {
  const result = await util.promisify(fs.readFile)(FILENAME, 'utf-8')
  console.log(result)
}
promisify_main()
*/
