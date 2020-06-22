import React, { Component } from 'react'

class Contador extends Component {

  constructor(props) {
    super(props)

    this.state = {
      num: props.num
    }

    this.handleClick = this.handleClick.bind(this)

    this.title = React.createRef()

  }

  handleClick() {

    console.log(this.title.current.innerHTML);

    this.setState({
      num: this.state.num + 1
    })
  }

  render() {
    return (
      <div>
        <h2
          ref={this.title}
        >
          {this.state.mensaje}
        </h2>
        <button
          onClick={this.handleClick}
        >
          Likes: ({this.state.num})
        </button>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <h1>Metodo Constructor</h1>
        <Contador num={1200} />
        <Contador num={20} />
      </div>
    )
  }
}

export default App;
