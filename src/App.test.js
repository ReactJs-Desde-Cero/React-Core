import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({
  adapter: new Adapter()
})

describe('Probando componente <App />', () => {
  test('Probando renderizado de componente', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Testing</h1>')
    expect(wrapper.find('h1')).toHaveLength(1)

    // expect(wrapper.html()).toBe('<div><h1>Introduccion a Testing</h1></div>')
  })
})
