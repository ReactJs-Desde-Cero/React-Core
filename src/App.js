import React, { Component } from 'react'

const Imagen = () => (
  <span
    role='img' aria-label='unicornio'
  >
    🦄
  </span>
)

class App extends Component {

  state = {
    active: true
  }

  handleChange = (e) => {

    this.setState({
      active: e.target.checked
    })
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="Checkbox"
            checked={this.state.active}
            onChange={this.handleChange}
          />
        </form>
        {this.state.active && (
          <h1>
            Etiqueta Checkbox <Imagen />
          </h1>
        )}
      </div>
    )
  }
}

export default App