const getValue = (exp) => {
  switch (exp) {
    case 'definido':
      return {}

    case 'indefinido':
      return undefined

    case 'verdadero':
      return true

    case 'falso':
      return false

    default:
      return null
  }
}

describe('Testear valores null, undefined y boleanos', () => {

  test('Validar si existe o esta definido un valor', () => {
    expect(getValue('definido')).toBeDefined() // toBeDefined solo falla cuando se compara con un undefined
  })

  test('Validar si el valor es null', () => {
    expect(getValue()).toBeNull() // ToBeNull solo compara con valores null
  })

  test('Validar si el valor es verdadero', () => {
    expect(getValue('verdadero')).toBeTruthy() // Solo compara con valores true
  })

  test('Validar si el valor es false', () => {
    expect(getValue('false')).toBeFalsy() // Solo compara con false
  })

  test('Validar si el valor es false', () => {
    expect(NaN).toBeNaN() // Solo compara con false
  })

})
