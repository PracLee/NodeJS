// 스트림으로 큰 파일 제작
const fs = require('fs')

const ws = fs.createWriteStream('./big_file.txt')

const NUM_BYTES = 50

for (let i = 0; i < NUM_BYTES; i += 1) {
  // a를 1mb씩 50번
  ws.write('a'.repeat(1024 * 1024))
}

// 스트림으로 큰 파일 처리
