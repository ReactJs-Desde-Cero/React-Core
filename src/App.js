import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
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

const FancyInput = forwardRef((props, ref) => {

  const [text, setText] = useState('')

  useImperativeHandle(ref, () => {
    return {
      handleAlert: () => {
        alert('Hola')
      },
      setParrafo: (message) => {
        setText(message)
      }
    }
  })

  return (
    <div>
      <h1>{text}</h1>
      <input type="text" />
    </div>
  )
})

const App = () => {

  const entrada = useRef()

  const handleClick = () => {
    entrada.current.setParrafo('Hola desde el App')
  }

  return (
    <div>
      <Header />
      <FancyInput ref={entrada} />
      <button onClick={handleClick}>
        DISPATCH
      </button>
    </div>
  )
}

export default App