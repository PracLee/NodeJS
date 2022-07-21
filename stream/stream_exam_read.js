/**
 *  a, b로 이어지는 파일 (ex. aaaaabbbbbaabbaaabbbbaaabbbb)
 * 위와 같은 파일에서 a의 연속구간(a-block) b의 연속구간(b-block)의 개수를 세는 프로그램
 * 중 파일 읽기
 * */
const { log } = console

const fs = require('fs')

// highWaterMark : 한번에 쌓여서 메모리에 들어오는 청크의 크기를 조절
const rs = fs.createReadStream('./big_file_exam', {
  encoding: 'utf-8',
  highWaterMark: 65536 * 4,
})

/** @type {Object<string,number>} */
const numBlocksPerCharacter = {
  a: 0,
  b: 0,
}

/** @type {string | undefined} */
let prevCharacter

let chunkCnt = 0

rs.on('data', (data) => {
  chunkCnt += 1
  if (typeof data !== 'string') {
    return
  }
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] !== prevCharacter) {
      const newCharacter = data[i]

      if (!newCharacter) {
        continue
      }

      prevCharacter = newCharacter
      numBlocksPerCharacter[newCharacter] += 1
    }
  }
})

rs.on('end', () => {
  log('Event : end')
  log('blockCnt : ', numBlocksPerCharacter)
  log('chunkCnt : ', chunkCnt)
})
