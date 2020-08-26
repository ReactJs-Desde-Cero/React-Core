import { createStore } from './Arrays'

describe('Haciendo pruebas a listas / Arrays', () => {
  test('Probar agregar una nueva fruta', () => {
    const store = createStore()
    store.addFruit('fresa')
    expect(store.getFruits()).toStrictEqual(['fresa'])
  })

  test('Probar agregar dos nuevas frutas', () => {
    const store = createStore()
    store.addFruit('fresa')
    store.addFruit('melon')
    expect(store.getFruits()).toStrictEqual(['fresa', 'melon'])
  })

  test('Probando si tiene fruta especifica', () => {
    const store = createStore()
    store.addFruit('manzana')
    store.addFruit('pera')

    expect(store.getFruits()).toContain('pera')
    expect(store.getFruits()).not.toContain('banana')

  })

  test('Probando la longitud del array', () => {
    const store = createStore()

    store.addFruit('manzana')
    store.addFruit('pera')
    store.addFruit('banana')

    expect(store.getFruits()).toHaveLength(3)

  })

  test('Probando un objeto con informacion de frutas', () => {
    const store = createStore()

    store.addFruit({
      name: 'fruta',
      price: 10
    })

    expect(store.getFruits()).toContainEqual({name: 'fruta', price: 10})

  })

})
