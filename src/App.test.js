import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, { Title } from './App'

Enzyme.configure({
  adapter: new Adapter()
})

describe('Probando componente <App />', () => {
  test('Probando renderizado de componente', () => {
    const wrapper = shallow(<App />)

    // console.log(wrapper.find('h1')) // Selecciona las etiques h1
    // console.log(wrapper.find('.container').html()) // Selector de clase
    // console.log(wrapper.find('#container').html()) // Selector de id
    // console.log(wrapper.find('div p').html()) // Selector de los p que estan dentro de div
    // console.log(wrapper.find('div + p').html()) // Slecciona a los p que estan despues de un div
    // console.log(wrapper.find('div ~ p').length) // selecciona todos los p que hay despues de div
    // console.log(wrapper.find('[type="text"]').html())  // selector atravez de props
    // console.log(wrapper.find('[type="checkbox"]').html())  // selector atravez de props
    // console.log(wrapper.find(Title).html())

    // expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Testing</h1>')
    // expect(wrapper.find('h1')).toHaveLength(1)

    // expect(wrapper.html()).toBe('<div><h1>Introduccion a Testing</h1></div>')
  })
})
