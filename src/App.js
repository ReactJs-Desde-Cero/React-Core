import React, { Component, useState } from 'react'
import './App.css'
const Header = () => {

  return (
    <header className='header'>
      <h1>
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span>
      </h1>
    </header>
  )
}

const App = (params) => {

  const [isActive, setClicks] = useState(false)

  const toggle = () => {
    setClicks(!isActive)
  }

  return (
    <div>
      {isActive && <Header />}
      <button
        onClick={toggle}
      >
        {isActive ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  )
}

export default App