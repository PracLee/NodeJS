// jest - unit test
// spec은 app이 어떻게 동작해야하나에 대한 규격
// test의 다른말
// expect().toBe() : 어떤 값이 무엇이길 바란다.

// supertest
const supertest = require('supertest')
const app = require('./app')

const request = supertest(app)

test('retrieve user json', async () => {
  const result = await request.get('/users/15').accept('application/json')

  expect(result.body).toMatchObject({
    nickname: expect.any(String),
  })
})

test('retrieve user page', async () => {
  const result = await request.get('/users/15').accept('text/html')

  expect(result.text).toMatch(/^<html>.*<\/html>$/)
})

test('update nickname', async () => {
  const newNickname = 'newNickname'

  const res = await request
    .post('/users/15/nickname')
    .send({ nickname: newNickname })
  expect(res.status).toBe(200)

  const userResult = await request.get('/users/15').accept('application/json')
  expect(userResult.status).toBe(200)
  expect(userResult.body).toMatchObject({
    nickname: newNickname,
  })
})
