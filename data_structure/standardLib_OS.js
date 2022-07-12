// OS
// 클라이언트의 컴퓨터 환경을 알 수 있다
// -> 구조에 따라 다르게 사용할 수 있다.

const os = require('os')

console.log(
  ['arch', os.arch()],
  ['platform', os.platform()],
  ['cpus', os.cpus()]
)
