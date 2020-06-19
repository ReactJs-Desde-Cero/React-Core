import React, { Component } from 'react'

class App extends Component {

    state = {
        color: 'red'
    }

    manejador = (event) => {

        const color = event.target.value

        this.setState({
            color: color
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.manejador}
                />
                <h1
                    style={{ color: this.state.color }}
                >
                    {this.state.color}
                </h1>
            </div>
        )
    }
}

export default App