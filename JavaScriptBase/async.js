// Promise 에서 필연적으로 필요한 함수를 선언 안하고 사용

/**
 * @param {number} duration
 */
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, duration)
  })
}

async function main() {
  console.log('first')
  await sleep(1000)
  console.log('second')
  await sleep(1000)
  console.log('third')
  await sleep(1000)
  console.log('final')
}

console.log('main')
main()
