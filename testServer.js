const http = require('http') // Http module 사용 선언

// http module 로, req, res 인자를 가지는 객체 server 생성 
const server = http.createServer((req,res)=>{
  res.statusCode = 200
  res.end('Hello!, node')
})



// 포트 선언
const PORT = 3000

// 설정해둔 port번호에서 받는다.
server.listen(PORT, ()=>{
  console.log('this server is Running at Port', PORT)
})

// Glitch
// 컨테이너안에 있는 node Server 에 에디터를 물려서 작동하는 방식
// hosting Https보안처리를 간단하게 제공 가능
// 간단한 nodeAPI를 제작하여 배포가능
