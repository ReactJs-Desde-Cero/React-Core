import React, { Component } from 'react'
import TarjetaFruta from './Components/TarjetaFruta'

const App = (props) => {
    return (
        <div>
            <TarjetaFruta name='Sandia' price='1.50' />
            <TarjetaFruta name='Naranja' price='2.50' />
            <TarjetaFruta name='Fresa' price='3.30' />
        </div>
    )
}

export default App