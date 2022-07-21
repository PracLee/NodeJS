const { log } = console

const fs = require('fs')

const rs = fs.createReadStream('./big_file.txt', {
  encoding: 'utf-8',
})

// 몇개의 청크로 사용하였는지 파악하기 위한 변수
let chunkCount = 0

rs.on('data', (data) => {
  chunkCount += 1
  log('Event : data', data[0])
})
rs.on('end', () => {
  log('Event : end')
  log('chunkCount : ', chunkCount)
})

// top -o PID 로 메모리 사용량 확인
