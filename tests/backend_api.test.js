const app = require('../app')
const supertest = require('supertest')

const api = supertest(app)

describe('api works', () => {
  test('getting right status code', async () => {
    await api
      .get('/ping')
      .expect(200)
  })

  test('content-type to be application-json', async () => {
    await api
      .get('/ping')
      .expect('Content-Type', /application\/json/)
  })

  test('response body to be pong!', async () => {
    const response = await api.get('/ping')
    expect(response.body.message).toBe('pong!')
  })
})