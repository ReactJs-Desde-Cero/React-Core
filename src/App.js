import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

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
        ( Cualquiera )
      </div>
      <div style={subtitleStyles}>
        React API Context
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

class Hijo extends Component {

  render() {
    return (
      <div style={boxStyles}>
        <p>Hijo</p>
        <Nieto />
      </div>
    )
  }

}

class Nieto extends Component {
  render() {
    return (
      <Consumer>
        {(contexto) => (
          <div style={boxStyles}>
            <p>Nieto</p>
            <button onClick={contexto.addClick}>
              Disparar ({contexto.click})
            </button>
          </div>
        )}
      </Consumer>
    )
  }

}

class App extends Component {

  state = {
    clicks: 0
  }

  addClick = () => {

    this.setState((state) => ({
      clicks: state.clicks + 1
    }))

  }

  render() {
    return (
      <Provider value={{
        click: this.state.clicks,
        addClick: this.addClick
      }}>
        <div style={boxStyles} >
          <Header />
          <Hijo />
        </div>
      </Provider>
    )
  }
}

export default App;