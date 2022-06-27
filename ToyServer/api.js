// @ts-check
// 추상화

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
    content: '두번째 포스트',
  },
]
/**
 * PostAPI Docs
 *
 * GET  /posts
 * GET  /posts/:id
 * POST /posts/:body
 */
/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */
/**
 * @typedef Raute
 * @property {RegExp} url
 * @property {'GET'|'POST'} method
 * @property {() => Promise<APIResponse>} callback
 */

/** @type {Raute[]} */
const rautes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
]

module.exports = {
  rautes,
}
