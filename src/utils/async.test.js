import { getDataCallback, getDataPromise, getDataPromiseError, getUsers } from './async'

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

  test('Haciendo test a promesa resuelta con async await', async () => {

    const name = await getDataPromise()
    expect(name).toBe('Alexander Ayra')

  })

  test('Haciendo test a promesa rechazada con async await', async () => {

    try {
      const name = await getDataPromiseError()
      expect(name).toBe('Alexander Ayra')
    } catch (error) {
      expect(error).toBe('Error')
    }

  })

  test('Probando promesas con solicitudes HTTP', async () => {
    const user = await getUsers()
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
  })

})
