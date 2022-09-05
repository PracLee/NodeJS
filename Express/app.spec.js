// jest - unit test
// spec은 app이 어떻게 동작해야하나에 대한 규격
// test의 다른말
// expect().toBe() : 어떤 값이 무엇이길 바란다.

// supertest
const supertest = require('supertest')
const request = supertest('./app')

test('our first test', async () => {
  const result = await request.get('/users/14').accept('application/json')
  console.log(result)
})
