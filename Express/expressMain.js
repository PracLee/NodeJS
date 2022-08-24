const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// URL의 prefix가 같을 경우 라우터 사용가능
const userRouter = express.Router()
app.use(bodyParser.json())
const PORT = 8080

// tempDB
const USER = {
  14: {
    nickname: 'fourteen',
  },
}

// get이든 post 이든 앞에 path는 공식문서를 통해 확인할수 있음
/** path pattern
 * ab?cd : a || b + cd
 * ab+cd : (a || b) * n + cd
 * ab*cd : ab + (************) + cd
 * a(bc)?d : ()?
 * /^\/abcd$/ : regx
 *['abc', /^\/xyz$/] : Array, Front || Back
 */

// get
userRouter.get('/', (req, res) => {
  res.send(`User List`)
})

userRouter.param('id', (req, res, next, value) => {
  console.log(`id parameter :`, value)
  req.user = USER[value]
  next()
})

userRouter.get('/:id', (req, res) => {
  console.log(`userRouter get id`)
  res.send(req.user)
})

// post
userRouter.post('/:id/nickname', (req, res) => {
  const { user } = req
  const { nickname } = req.body

  user.nickname = nickname
  //register user
  res.send(`User nickname updated ${nickname}`)
})

// 라우터의 조건 명시
app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`)
})
