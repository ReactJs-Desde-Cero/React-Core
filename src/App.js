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

const useSizes = () => {

  const [width, setWidth] = useState(window.innerWidth)
  const [heigth, setHeigth] = useState(window.innerHeight)

  const handleResize = () => {
    setWidth(window.innerWidth)
    setHeigth(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  return {
    width,
    heigth
  }

}

const App = () => {

  const { width, heigth } = useSizes()

  return (
    <div>
      <Header />
      <h1>
        Width: {width} Heigth: {heigth}
      </h1>
    </div>
  )
}

export default App