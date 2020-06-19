import React, { Component } from 'react'

const Saludo = (props) => {
    return (
        <div>
            <div>{props.saluda && <strong>{props.name}</strong>}</div>
            {
                props.saluda
                    ?
                    <h1>Hay mensajes esperandote 😱 </h1>
                    :
                    <h1>wops no hay mensajes 😲 </h1>
            }
        </div>
    )
}

const App = (props) => {
    return (
        <div>
            <Saludo
                saluda
                name='Alexander'
            />
        </div>
    )
}

export default App