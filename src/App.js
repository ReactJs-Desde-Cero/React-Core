import React, { Component } from 'react'

const Header = () => {

  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px'
  }

  return (
    <header style={headerStyles}>
      <div>
        ( Hijo a Padre )
      </div>
      <div style={subtitleStyles}>
        Render Prop
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )

}

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

// El nombre siempre empieza con With
const withCounter = (Comp) => {
  return (conf) => {

    return class extends Component {

      state = {
        num: conf.num
      }

      add = () => {
        this.setState(state => ({
          num: state.num + conf.sumClick
        }))
      }

      render() {
        const { num } = this.state
        return (
          <Comp
            num={num}
            add={this.add}
          />
        )
      }
    }
  }
}

class App extends Component {
  render() {

    const { num, add } = this.props

    return (
      <div style={boxStyles} >
        <Header />
        <h1>{num}</h1>
        <button onClick={add}>
          ADD
        </button>
      </div>
    )
  }
}

export default withCounter(App)({
  num: parseInt(Math.random() * 100) * 5,
  sumClick: 3
})