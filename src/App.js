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
  const [title, setTitle] = useState('Hooks con React')

  // una manera de actualizar el State ('...state')

  // const merge = (nextState) => {
  //   setState({
  //     ...state,
  //     ...nextState
  //   })
  // }

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  const handleInput = (e) => {
    setTitle(e.target.value)

  }

  return (
    <div>
      <Header />
      <input
        type="text"
        value={title}
        onChange={handleInput}
      />
      <button onClick={addClicks}>
        Clicks({clicks})
      </button>
      <h3>{title}</h3>
    </div>
  )
}

export default App