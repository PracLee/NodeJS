const express = require('express')

const app = express()

// HTML (PUG)
app.use(express.json())
app.set('views', 'Express/views')
app.set('view engine', 'pug')

const userRouter = require('./routers/user.js')

app.use('/users', userRouter)
app.use('/public', express.static('Express/public'))

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
