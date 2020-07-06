import React, { useState, useEffect, useRef } from 'react'
import { useDebounce } from 'use-debounce'
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

  const [name, setName] = useState('')
  const [search] = useDebounce(name, 1000)
  const [products, setProd] = useState([])

  useEffect(() => {

    //debounce

    fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
      .then(res => res.json())
      .then(data => setProd(data.products))

  }, [search])

  // Solicitud HTTP

  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <Header />
      <input
        type="text"
        onChange={handleInput}
      />
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            {prod.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App