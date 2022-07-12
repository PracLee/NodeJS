// child_process
// process간의 메모리 공간을 분리 시키고 자식 프로세스를 만들어서 사용
// 동시성 문제 해결
// 작업 병렬처리
// node 내에 존재하지 않는 third party library 사용할때도 사용

const { spawn } = require('child_process')
const ls = spawn('ls', ['-lh', '/usr'])

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})
