import React, { useState } from 'react'

const Header = ({ show }) => {

    const activeStile = {
        background: '#3d1f9a',
        transform: 'scale(1)'
    }

    let headerStyles = {
        background: 'black',
        transform: 'scale(0)',
        position: 'absolute',
        textAlign: 'center',
        borderRadius: '.4em',
        color: '#FFF',
        padding: '0.5em',
        margin: '0.5em',
        fontSize: '14px',
        transition: 'all 800ms ease'
    }

    if (show) {
        headerStyles = {
            ...headerStyles,
            ...activeStile
        }
    }

    return (
        <header style={headerStyles}>
            <h1>
                Transitiones CSS en linea
                <span role='img' aria-label='fire'>
                    🔥
                </span>
            </h1>
        </header>
    )

}

const App = () => {

    const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(!active)
    }

    return (
        <div>
            <button onClick={toggle}>
                {active ? 'Desactivar' : 'Activar'}
            </button>
            <Header show={active} />
        </div>
    )
}

export default App