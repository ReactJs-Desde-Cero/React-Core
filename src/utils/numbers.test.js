import { suma, resta, multiplicaion, division, getRandomNum } from './numbers'

describe('Probando funciones matematicas', () => {

  test('Probando la funcion suma', () => {
    expect(suma(5, 5)).toBe(10)
  })

  test('Probando la funcion resta', () => {
    expect(resta(5, 5)).toBe(0)
  })

  test('Probando la funcion Multiplicacion', () => {
    expect(multiplicaion(5, 5)).toBe(25)
  })

  test('Probando la funcion Division', () => {
    expect(division(5, 5)).toBe(1)
  })

  test('Probando la funcion getRandomNum', () => {
    expect(getRandomNum(5, 10)).toBeGreaterThan(5) // ser mayor que
    expect(getRandomNum(5, 10)).toBeGreaterThanOrEqual(5) // ser Mayor o Igual que
    expect(getRandomNum(5, 10)).toBeLessThan(11) // ser Menor que
    expect(getRandomNum(5, 10)).toBeLessThanOrEqual(10) // ser Menor o Igual que
  })
})
