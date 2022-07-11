const fs = require('fs')

const bufFromFile = fs.readFileSync('Test')

// 1byte : 0 ~ 255 === 0 ~ 2^8-1

// Buffer init
const buf = Buffer.from([97, 98, 99, 100, 101])

const bufA = Buffer.from([0])
const bufB = Buffer.from([3])
const bufC = Buffer.from([6])
const bufD = Buffer.from([2])

const bufs = [bufA, bufB, bufC, bufD]
bufs.sort(Buffer.compare)

console.log(bufs)
console.log(bufFromFile, buf)

// Buffer Compare : 비교값이 나와서 sort에서 정리 가능
console.log(buf.compare(bufFromFile))

// isBuffer : 버퍼인지 확인
console.log(Buffer.isBuffer(buf))

// readIntLE : Buffer를 256진수로 사용가능 : Little Endian
console.log(buf.readInt32LE())

// readIntDE : Big Endian
