import React, { useState, useEffect } from 'react'
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

const App = () => {

  const [num, setNum] = useState(0)
  const [emoji, setEmoji] = useState('🦁')

  useEffect(() => {
    alert('useEffect 🎇')
  }, [num, emoji])

  const addClick = (e) => {
    setNum(num + 1)
  }

  const handleClick = () => {
    const nextEmoji = emoji === '🦁' ? '🙊' : '🦁'

    setEmoji(nextEmoji)
  }

  return (
    <div>
      <Header />
      <button onClick={addClick}>
        ADD ({num})
      </button>
      <button onClick={handleClick}>
        Alternar Emoji
      </button>
      <h1>{emoji}</h1>
    </div>
  )
}

export default App