// frameWork 없이 web Server 열기

// 서버 자동 초기화 툴 : nodemon
// -> 서버 파일 변경후 저장하면, 바로 서버 재기동함
// 설치 : npm install --save-dev nodemon
// 사용 : 1. pacage.json -> scripts ->  "server":"nodemon ToyServer/nodeAPI.js" 추가
//       2. npm run server

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용
 * - 인증 로직 X
 * - RESTful API 사용
 */
// http 모듈 호출
const http = require('http')

const { routes } = require('./api')

const server = http.createServer((req, res) => {
  async function main() {
    const route = routes.find(
      (_route) =>
        req.url && _route.url.test(req.url) && _route.method == req.method
    )
    if (!route) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }
    const result = await route.callback()
    res.statusCode = result.statusCode
    res.end(result.body)
  }
  main()
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is litening ar PORT : ${PORT}`)
})
