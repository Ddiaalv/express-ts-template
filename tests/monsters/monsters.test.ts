import supertest from 'supertest'
import app from '../../src'
import { Monsters } from '../../src/models/monsters.models'

const api = supertest(app)

describe('Monsters End-Points:', () => {
  test('should be of type json', async () => {
    await api.get('/monsters').expect(200).expect('Content-Type', /json/)
  })
  test('cors should be activated', async () => {
    await api
      .get('/monsters')
      .expect(200)
      .expect('Access-Control-Allow-Origin', '*')
  })
  test('should return a list of monsters', async () => {
    const response = await api.get('/monsters')
    const content = response.body
    expect(content).toHaveLength(content.length)
  })

  test('should contain a specific monster within the array', async () => {
    const monsterName = 'Rathalos'
    const response = await api.get('/monsters').expect(200)
    const monster = response.body.find(
      (monster: Monsters) => monster.nombre === monsterName
    )
    expect(monster.nombre).toBe(monsterName)
  })
})
