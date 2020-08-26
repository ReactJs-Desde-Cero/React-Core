import { createStore } from './objects'

describe('Test a Objetos', () => {

  test('Agregar un item en store', () => {

    const store = createStore()

    store.addItem({
      name: 'Alexander',
      id: 1,
      country: 'Perú'
    })

    expect(store.getStore()[0]).toEqual({
      name: 'Alexander',
      id: 1,
      country: 'Perú'
    })
  })

  test('Buscar un Item por el id', () => {

    const store = createStore()

    store.addItem({
      name: 'Alexander',
      id: 1,
      country: 'Perú'
    })

    expect(store.getById(1)).toEqual({ // toEqual valida si hay todo lo que le mandamos
      name: 'Alexander',
      id: 1,
      country: 'Perú'
    })

    expect(store.getById(1)).toMatchObject({ // ToMatchObject valida si hay lo que le mandamos
      name: 'Alexander'
    })

    expect(store.getById(1)).toHaveProperty('name') // verifica si hay la propiedad que le mandamos
    // Segundo parametro ponemos el valor de la propiedad

    // expect(store.getById(1)).toHaveProperty('lastname') // por ejemplo aqui falla
  })

})
