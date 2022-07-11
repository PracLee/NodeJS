// C의 자료형과 연관
// Buffer를 256진수로 사용가능

const buf = Buffer.from([0, 2, 0, 0])
/**
 *
 * @param {*} array
 * @returns {number}
 */
function readInt32LE(array) {
  // prettier-ignore
  return (
       array[0]
     + array[1] * 256
     + array[2] * 256 ** 2
     + array[3] * 256 ** 3
     )
}

/**
 *
 * @param {*} array
 * @returns {number}
 */
function readInt32BE(array) {
  // prettier-ignore
  return (
       array[3]
     + array[2] * 256
     + array[1] * 256 ** 2
     + array[0] * 256 ** 3
     )
}

const offset = 0

const { log } = console

log(`LE:our function : `, readInt32LE(buf))
log(`LE:org function : `, buf.readInt32LE(0))

log(`BE:our function : `, readInt32BE(buf))
log(`BE:org function : `, buf.readInt32BE(0))

// readIntLE : Little Endian
// 32^1, 32^2, 32^3, 32^4
//console.log(buf.readInt32LE(3))

// readIntDE : Big Endian
// 32^4, 32^3, 32^2, 32^1
//console.log(buf.readInt32BE(2))
