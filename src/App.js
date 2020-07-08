import React, { useState, useMemo } from 'react'
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

const SuperList = ({ log, list }) => {

  console.log('%cReact <SuperList /> ' + log, 'color: red');

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )

}

const App = () => {

  const [clicks, setCicks] = useState(0)

  const add = () => {
    setCicks(clicks + 1)
  }

  const memoList = useMemo(() => {

    return (
      <SuperList
        list={[1, 2, 3, 4, 5]}
        log='Memorizando'
      />
    )

  }, [])

  return (
    <div>
      <Header />
      <button onClick={add}>
        add ({clicks})
      </button>
      <SuperList
        list={['mango', 'pera', 'platano', 'sandia', 'uva']}
        log='Normal'
      />

      {memoList}
    </div>
  )
}

export default App