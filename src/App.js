import React, { Component } from 'react'

class Time extends Component {

  state = {
    time: 0,
    isPlaying: true
  }

  tick = null

  componentDidMount() {
    this.play()
  }

  componentWillUnmount() {
    clearInterval(this.tick)
  }



  play = () => {

    this.setState({ isPlaying: true })

    this.tick = setInterval(() => {
      this.setState(state => ({
        time: state.time + 1
      }))
    }, 1000)
  }

  pause = () => {
    this.setState({ isPlaying: false })
    clearInterval(this.tick)
  }

  toggle = () => {
    if (this.state.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
  }

  render() {

    const { time, isPlaying } = this.state
    return (
      <div>
        <h1>{time}</h1>
        <button
          onClick={this.toggle}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    )
  }
}
class App extends Component {

  state = {
    mostrar: true
  }

  desmontar = () => {
    this.setState({ mostrar: false })
  }

  render() {
    return (
      <div>
        <h3>componentWillUnmount</h3>
        <button
          onClick={this.desmontar}
        >
          Desmontar
        </button>
        {this.state.mostrar && <Time />}
      </div>
    )
  }
}

export default App;
