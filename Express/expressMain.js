const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// HTML (PUG)
app.use(express.json())
app.set('views', 'Express/views')
app.set('view engine', 'pug')

const PORT = 8080

const userRouter = require('./routers/user.js')

app.use('/users', userRouter)
app.use('public', express.static('Express/public'))

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`)
})
