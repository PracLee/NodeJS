const express = require('express')

// URL의 prefix가 같을 경우 라우터 사용가능
const router = express.Router()
app.use(bodyParser.json())

// tempDB
const USERS = {
  14: {
    nickname: 'fourteen',
  },
  15: {
    nickname: 'fifteen',
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
router.get('/', (req, res) => {
  res.send(`User List`)
})

router.param('id', (req, res, next, value) => {
  req.user = USERS[value]
  next()
})

router.get('/:id', (req, res) => {
  const resMimeType = req.accepts(['json', 'html'])

  if (resMimeType === 'json') {
    res.send(req.user)
  } else if (resMimeType === 'html') {
    res.render('user-profile', {
      nickname: req.user.nickname,
    })
  }
})

router.post('/', (req, res) => {
  res.send('User Registered.')
})

// post
router.post('/:id/nickname', (req, res) => {
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

module.exports = router
