import React, { Component } from 'react'

class Gato extends Component {
    render() {
        return (
            <div>
                <h1>Gato 🐈</h1>
                <pre>
                    {JSON.stringify(this.props, null, 4)}
                </pre>
            </div>
        )
    }
}



class App extends Component {

    state = {
        vidas: 5,
        color: 'white and black',
        name: 'Mishi'
    }

    render() {

        const otrosDatos = {
            raza: 'Tropical',
            peleas: 300
        }
        return (
            <div>
                <Gato
                    name='Garfield'
                    age='2 años'
                    {...otrosDatos}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App