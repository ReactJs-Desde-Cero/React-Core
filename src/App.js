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

class Resize extends Component {

  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {

    this.setState((state) => ({
      width: window.innerWidth,
      height: window.innerHeight
    }))

  }

  render() {

    const { render } = this.props
    const { width, height } = this.state

    return render({ width, height })
  }
}

class App extends Component {
  render() {
    return (
      <div style={boxStyles} >
        <Header />
        <Resize
          render={({ width, height }) => {
            return (
              <div>
                <h1>Width: {width}</h1>
                <li>{height}</li>
              </div>
            )
          }}
        />
      </div>
    )
  }
}

export default App;