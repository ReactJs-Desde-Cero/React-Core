import React, { Component } from 'react'

const Unicorn = (props) => {
  return (
    <span
      role='img'
      aria-label='unicornio'
    >
      🦄
    </span>
  )
}

class App extends Component {

  state = {
    tech: 'Vue'
  }

  handleChange = (e) => {

    this.setState({
      tech: e.target.value
    })

  }

  render() {
    return (
      <div>
        <h1>
          Etiqueta Select <Unicorn />
          {this.state.tech}
        </h1>
        <form>
          <select value={this.state.tech} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option selected value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
      </div>
    )
  }
}

export default App