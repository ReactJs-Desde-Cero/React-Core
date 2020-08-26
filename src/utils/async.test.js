import { getDataCallback } from './async'

describe('Haciendo test a operaciones asyncronas', () => {
  test('Haciendo test a callback', (done) => {
    getDataCallback((name) => {
      expect(name).toBe('Alexander Ayra')
      done()
    })
  })
})
