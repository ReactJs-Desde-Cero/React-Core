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

  const [users, setUser] = useState([])
  const [isFetching, setFetching] = useState(true)

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setUser(users)
        setFetching(false)
      })
  }, [])

  return (
    <div>
      <Header />
      {isFetching && <h1>Cargando......</h1>}
      <ul>
        {users.map((user) => (
          <li>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App