/**
 *  a, b로 이어지는 파일 (ex. aaaaabbbbbaabbaaabbbbaaabbbb)
 * 위와 같은 파일에서 a의 연속구간(a-block) b의 연속구간(b-block)의 개수를 세는 프로그램
 * 중 파일 제작
 * */
const fs = require('fs')

const ws = fs.createWriteStream('./big_file_exam')

const NUM_BLOCKS = 500

/** @type {Object.<string, number>} */
const numBlocksPerCharacter = {
  a: 0,
  b: 0,
}

for (let i = 0; i < NUM_BLOCKS; i += 1) {
  // 800 ~ 1000
  // Math.random은 0~9까지의 실수 이기때문에 범위 조정 후 Math.floor로 정수화
  const blockLength = Math.floor(800 + Math.random() * 200)
  const character = i % 2 === 0 ? 'a' : 'b'
  ws.write(character.repeat(1024 * blockLength))

  numBlocksPerCharacter[character] += 1
}

console.log(numBlocksPerCharacter)
