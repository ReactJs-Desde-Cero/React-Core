import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InpuntNoControlado extends Component {

  handleSubmit = () => {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='name'>Nombre:</label>
          <input
            type="text"
            placeholder='Nombre'
            id='name'
          />
        </p>
        <p>
          <label htmlFor='email'>Email:</label>
          <input
            type="text"
            placeholder='Email'
            id='email'
          />
        </p>
        <button>
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
          Atributo ref <Unicorn />
        </h1>
        <InpuntNoControlado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App