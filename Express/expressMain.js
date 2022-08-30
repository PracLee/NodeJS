const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// URL의 prefix가 같을 경우 라우터 사용가능
const userRouter = express.Router()
app.use(bodyParser.json())

// HTML (PUG)
app.set('views', 'Express/views')
app.set('view engine', 'pug')

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
  req.user = USER[value]
  next()
})

userRouter.get('/:id', (req, res) => {
  const resMimeType = req.accepts(['json', 'html'])

  if (resMimeType === 'json') {
    res.send(req.user)
  } else if (resMimeType === 'html') {
    res.render('user-profile', {
      nickname: req.user.nickname,
    })
  }
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

// CSS
app.use('/public', express.static('Express/public'))

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello Pug',
  })
})

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`)
})
