const { log } = console

// 다른 객체로 인식하여 3번 인스턴스화
// 저장된 파일이름은 저장하지만, 파일들을 접근할때는 case와 관계 없이 한다.
// -> 잠재적인 문제의 발생
// => naming convention의 필요!
const a = require('./convention_module')
const b = require('./Convention_module')
const c = require('./convention_Module')

log(a === b, b === c)
