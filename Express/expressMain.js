const app = require('./app')

const PORT = 8080

app.listen(PORT, () => {
  console.log(`This Express Server is listening at port : ${PORT}`)
})
