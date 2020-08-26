import { saluda, getId, despide } from './strings'

describe('Pruebas de strings', () => {

  const saludo = saluda('Alexaner')
  const id = getId()
  const saludoDespide = despide()

  test('Probando la funcion saluda', () => {
    expect(saluda(saludo)).toMatch('Hola soy')
  })

  test('Probando la funcion getId', () => {
    expect(id).toMatch(/\d{2}-\d{3}/) // Verifica los digitos
  })

  test('Probando la funcion despide', () => {
    expect(saludoDespide).toMatch('Bye')
    // expect(saludoDespide).not.toMatch('Bye') // No deberia de Coincidir
  })
})
