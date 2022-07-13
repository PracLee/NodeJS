// stream
// data, error, end등의 이벤트 핸들러를 달아 처리함
// 특별히 지정하지 않으면 data === Buffer
const fs = require('fs')

// 인코딩 지정시 dataEvent에 떨어지는 data가 String 이 됨!
const rs = fs.createReadStream('Test', { encoding: 'utf-8' })

rs.on('data', (data) => {
  // do something with data
})

rs.on('error', (error) => {
  /** ... */
})

rs.on('end', () => {
  /** ... */
})
