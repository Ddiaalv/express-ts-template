import supertest from 'supertest'
import app, { defaultObject } from './index'

const api = supertest(app)

test('Endpoint:', async () => {
  await api
    .get('/')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('should return a default message:', async () => {
  await api
    .get('/')
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual(defaultObject)
    })
})
