import React, { Component } from 'react'

class Imagen extends Component {
  render() {
    return (
      <span
        role='img' aria-label='unicornio'
      >
        🦄
      </span>
    )
  }
}

class App extends Component {

  state = {
    techs: ['Vue']
  }

  handleChange = (e) => {

    const techs = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    )

    this.setState({
      techs
    })
  }

  render() {
    return (
      <div>
        <h1>Etiqueta Select <Imagen />
        </h1>
        <form>
          <select
            value={this.state.techs}
            onChange={this.handleChange}
            multiple={true}
          >
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
          {this.state.techs.map(option => (
            <li key={option}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


export default App