const { log } = console

// 다른 객체로 인식하여 3번 인스턴스화
// -> naming convention의 필요!
const a = require('./convention_module')
const b = require('./Convention_module')
const c = require('./convention_Module')

log(a === b, b === c)
