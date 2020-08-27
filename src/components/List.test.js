import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from './List'

Enzyme.configure({
  adapter: new Adapter()
})

describe('Probando componente <List />', () => {
  test('Validar Nodos', () => {

    const fruits = [
      {name: 'fresa', id: 1},
      {name: 'pera', id: 2},
      {name: 'uva', id: 3},
      {name: 'platano', id: 4},
    ]

    const wrapper = shallow(<List title='Frutas' list={fruits} />)

    // Validar si existe nodo
    expect(wrapper.find('h1').exists()).toBe(true)
    // Validar si tiene clase css
    expect(wrapper.find('h1').hasClass('big')).toBe(true)

    // Validar cantidad de elementos hijos
    expect(wrapper.find('ul').children().length).toBe(4)

    // Validar el contenido de texto
    expect(wrapper.find('ul').childAt(2).text()).toBe('naranja')

    // Validar el tipo de nodo / elemento
    expect(wrapper.find('ul').childAt(2).type()).toBe('li')

    // Validar html
    expect(wrapper.find('ul').childAt(2).html()).toBe('<li>naranja</li>')

  })
})
