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

const useFetch = (url, loh = []) => {

  const [data, setData] = useState(loh)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {

    setFetching(true)

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

  const [num, setNum] = useState(1)

  const [users, isFetchig] = useFetch('http://jsonplaceholder.typicode.com/users/' + num, {})

  const add = () => {
    setNum(num + 1)
  }

  return (
    <div>
      <Header />
      <button
        onClick={add}
      >
        ADD({num})
      </button>
      {isFetchig && <h1>Cargando....</h1>}

      {!isFetchig && users.name && (
        <div>
          <h1>{users.name}</h1>
          <p>{users.phone}</p>
        </div>
      )}
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default App