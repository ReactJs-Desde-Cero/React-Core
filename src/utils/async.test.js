import { getDataCallback, getDataPromise, getDataPromiseError } from './async'

describe('Haciendo test a operaciones asyncronas', () => {

  test('Haciendo test a callback', (done) => {
    getDataCallback((name) => {
      expect(name).toBe('Alexander Ayra')
      done()
    })
  })

  test('haciendo test a Promesas', (done) => {
    getDataPromise().then((name) => {
      expect(name).toBe('Alexander Ayra')
      done()
    })
  })

  test('haciendo test a Promesas  con expect', () => {
    return expect(getDataPromise()).resolves.toBe('Alexander Ayra')
  })

  test('haciendo test a Promesa Rechazada', () => {
    getDataPromise().then((name) => {
    }).catch((err) => {
      expect(err).toBe('Error')
    })
  })

  test('Haciendo test a Promesas con expect Rejects', () => {
    return expect(getDataPromiseError()).rejects.toBe('Error')
  })

})
