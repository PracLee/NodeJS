// frameWork 없이 web Server 열기

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용
 * - 인증 로직 X
 * - RESTful API 사용
 */
// http 모듈 호출
const http = require('http')

// JSDoc을 사용하여 형식 고정
/**
 * @typedef Post
 * @property {string}id
 * @property {string}title
 * @property {string}content
 */
/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My First Post',
    content: 'Hello!',
  },
  {
    id: 'Second',
    title: 'My Second Post',
    content: 'Second',
  },
]
// 서버 자동 초기화 툴 : nodemon
// -> 서버 파일 변경후 저장하면, 바로 서버 재기동함
// 설치 : npm install --save-dev nodemon
// 사용 : 1. pacage.json -> scripts ->  "server":"nodemon ToyServer/nodeAPI.js" 추가
//       2. npm run server

/**
 * PostAPI Docs
 *
 * GET  /posts
 * GET  /posts/:id
 * POST /posts/:body
 */
const server = http.createServer((req, res) => {
  const POSTS_ID_REGX = /^\/posts\/([a-zA-Z0-9-_]+)$/
  const postIdREGXResult = (req.url && POSTS_ID_REGX.exec(req.url)) || undefined // How to get REGX
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('List of Posts')

    // return boolean
  } else if (postIdREGXResult) {
    //get post Id
    const postId = postIdREGXResult[1]
    console.log(`postID : ${postId}`)
    res.statusCode = 200
    res.end('Some Content of the Post')
  } else if (req.url === 'posts/:body' && req.method === 'POST') {
    res.statusCode = 200
    res.end('Creating post')
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
  res.statusCode = 200
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is litening ar PORT : ${PORT}`)
})
