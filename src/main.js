//@ts-check

// Formatting(미적인것), Linting(혹여나 에러가 날 수 있는것들을 잡아줌)
// Formatting : Prettier 사용
// 설치방법 (terminal입력)
// npm install --save-dev prettier

// Linting : ESLint 사용
// 설치방법 (terminal입력)
// npm install --save-dev eslint

// node only plugin
// npm install --save-dev eslint-plugin-node

// Type Checking
// Comfile을 거치지 않기 때문에 미리 에러가 나지 않는다.
// Type Error가 발생해도, 실행시점이 아니면 알지 못한다.
// TypeChecking Tools : TypeScript
// JavaScript에 Type정의만 얹어 놓았다.
// 설치
// npm install --save-dev typescript

// node에 적용되는 typeScript install
// npm install --save-dev @types/node

// typeScript의 설정 : ts.js

const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`)
})
