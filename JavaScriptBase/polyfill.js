// import
require('core-js')

const complicatedArray = [1, [2, 3]]
const flattendArray = complicatedArray.flat()

console.log(flattendArray)

const original = 'abcabc123'
const changed = original.replaceAll('abc', '123')
console.log(changed)

/**
 * @param {number} duration
 * @returns
 */
function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, duration)
  })
}

function alwaysReject() {
  return new Promise((resolve, reject) => {
    reject()
  })
}

Promise.allSettled([
  sleep(1000),
  sleep(1500),
  sleep(2000),
  alwaysReject(),
]).then(() => {
  console.log('Promise All Done')
})

const objs = [
  {
    foo: {
      bar: 1,
    },
  },
  {
    foo: {},
  },
]

console.log(objs.map((obj) => {}))
