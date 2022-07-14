// 스트림으로 큰 파일 제작
const fs = require('fs')

const ws = fs.createWriteStream('local/big_file')
const NUM_BYTES = 500
for (let i = 0; i < NUM_BYTES; i += 1) {
  // a를 1mb씩 500번
  ws.write('a'.repeat(1024 * 1024))
}

// 스트림으로 큰 파일 처리
