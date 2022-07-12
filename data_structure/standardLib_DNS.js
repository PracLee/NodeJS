// DNS Module
// 해당 domain의 정보를 나타내줌
const dns = require('dns')

dns.lookup('naver.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family)
})
