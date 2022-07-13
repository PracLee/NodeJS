// 데이터가 흘러가도록 처리가 되기 때문에 메모리가 적게 소모
const fs = require('fs')

const stream = fs.createReadStream('Test')

stream.pipe(process.stdout)
