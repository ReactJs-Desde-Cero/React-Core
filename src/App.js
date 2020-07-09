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

const useFetch = (url) => {

  const [data, setData] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setFetching(false)
      })

  }, [url])

  return [
    data,
    fetching
  ]

}

const App = () => {

  const [users, isFetchig] = useFetch('http://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <Header />
      {isFetchig && <h1>Cargando....</h1>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App