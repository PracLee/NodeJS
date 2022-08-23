const express = require('express')
const fs = require('fs')

const app = express()

const PORT = 8080

// express는 미들웨어를 가지고있어서 그때그때 알맞은 미들웨어를 사용하여 그때그때 상황에 맞춰서 사용할 수 있음!
// 여러가지 함수들을 이어서 사용할 수 있음!
// Request 객체의 형태를 파악하려면 Express의 문서를 확인!
// node가 기본적으로 가지고 있는 res, req와는 다름!
// 노드는 기본적으로 비동기로 처리되기 때문에 callback으로 처리되고, next인자로 다음 미들웨어로 넘어 갈 수 있음

app.use(
  '/',
  async (req, res, next) => {
    console.log('middleware 1-1')

    const fileContents = await fs.promises.readFile('.gitignore')

    // 호출된 시점 저장 후 임의로 req에 저장해서 넘김
    const requestedAt = new Date()
    req.requestedAt = requestedAt
    req.fileContents = fileContents
    setTimeout(() => {
      next()
    }, 1000)
  } /*, 이렇게도 미들웨어 이어붙이기 가능
  (req, res, next) => {
    console.log('middleware 1-2')
    next()
  }*/
)

app.use((req, res) => {
  console.log('middleware 2')
  res.send(
    `Hello, express! requestedAt : ${req.requestedAt} and fileContents : ${req.fileContents}`
  )
})

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`)
})
