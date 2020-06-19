import React, { Component } from 'react'
import styles from './App.module.css'


class App extends Component {
  state = {
    fruits: [
      { name: 'Fresa', price: 5.4 },
      { name: 'Manzana', price: 2.3 },
      { name: 'Sandia', price: 1.2 },
      { name: 'Guayaba', price: 5 },
      { name: 'Pera', price: 4.12 },
      { name: 'Kiwi', price: 3.87 },
      { name: 'Limon', price: 7.21 },
      { name: 'Melon', price: 6.21 },
      { name: 'Cereza', price: 4.98 }
    ],

    frutaSeleccionada: {}
  }

  select = (frutaSeleccionada, event) => {
    this.setState({
      frutaSeleccionada
    })
  }

  render() {
    const { fruits, frutaSeleccionada } = this.state
    return (
      <div>
        <ul>
          {fruits.map((fruta) => (
            <li
              key={fruta.name}
              onClick={this.select.bind(this, fruta)}
              style={{
                color: frutaSeleccionada.name === fruta.name
                  ? 'red'
                  : '#000'
              }}
            >
              {fruta.name} - ${fruta.price}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App