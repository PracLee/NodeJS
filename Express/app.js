const express = require('express')

const app = express()

// HTML (PUG)
app.use(express.json())
app.set('views', 'Express/views')
app.set('view engine', 'pug')

const userRouter = require('./routers/user.js')

app.use('/users', userRouter)
app.use('/public', express.static('Express/public'))
app.use('/uploads', express.static('uploads'))

// 4개의 인자를 받아야만 error handler로 동작하므로, 사용하지 않는 변수(`next`)가 있더라도 eslint 에러가 나지 않도록 함
// err middleware
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

// CSS
app.use('/public', express.static('Express/public'))

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello Pug',
  })
})

module.exports = app
