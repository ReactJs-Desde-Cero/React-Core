import React, { Component } from 'react'

const Unicorn = (props) => {
  return (
    <span
      role='img' aria-label='unicornio'
    >
      🦄
    </span>
  )
}

class InputNoControlado extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const nombre = event.target[0].value
    const email = event.target[1].value

    // Menejo de Datos

    this.props.onSend({ nombre, email })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder='Nombre'
        />
        <input
          type="text"
          placeholder='Email'
        />
        <button
          onClick={this.handleClick}
        >
          Enviar
        </button>
      </form>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>
          Inputs No Controlados Refs <Unicorn />
        </h1>
        <InputNoControlado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App