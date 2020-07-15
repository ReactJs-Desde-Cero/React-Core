import React, { useState } from 'react'
import './Animaciones.css'

const Header = ({ show }) => {

    const clases = show
        ? 'header header-active'
        : 'header'

    return (
        <div className={clases}>
            <h1>Transiciones CSS en linea</h1>
            <span role='img' aria-label='fire'>
                🔥
            </span>
        </div>
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