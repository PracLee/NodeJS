const express = require('express')

const app = express()

const PORT = 8080

// 어떤 경로의 응답
app.use('/', (req, res) => {
  res.send(`Hello, express!`)
})

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`)
})
