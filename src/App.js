import React, { Component } from 'react'

class Contador extends Component {

  state = {
    num: this.props.num
  }

  static getDerivedStateFromProps(props, state) {
    if (state.num < props.num) {
      return {
        num: props.num
      }
    }
    return null
  }

  Aumentar = () => {

    this.setState(state => ({
      num: state.num + 1
    }))

  }

  render() {
    const { num } = this.state
    return (
      <div>
        <hr />
        <button
          onClick={this.Aumentar}
        >
          Clicks ({num})
        </button>
      </div>
    )
  }

}


class App extends Component {

  state = {
    numero: 0
  }

  handleChange = (e) => {
    let numero = parseInt(e.target.value)

    if (isNaN(numero)) {
      numero = 0
    }

    this.setState(state => ({
      numero
    }))

  }

  render() {
    const { numero } = this.state
    return (
      <div>
        <h3>getDerivedStateFromProps</h3>
        <h2> {numero} </h2>
        <input type="text" onChange={this.handleChange} />
        <Contador
          num={numero}
        />
      </div>
    )
  }
}

export default App;
