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

  const [clicks, setClicks] = useState(0)

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  return (
    <div>
      <Header />
      <button
        onClick={addClicks}
      >
        Clicks ({clicks})
      </button>
    </div>
  )
}

export default App