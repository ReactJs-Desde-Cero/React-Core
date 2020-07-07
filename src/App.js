import React, { useState } from 'react'
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

const Counter = React.memo(({ count }) => {
  console.log('%cRender <Counter', 'color:blue');
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
})

const Title = React.memo(({ text }) => {
  console.log('%cRender <Counter', 'color:orangered');
  return (
    <div>
      <h2>{text}</h2>
    </div>
  )
})

const App = () => {

  const [count, setNum] = useState(0)
  const [title, setTitle] = useState('')

  const handleClick = () => {
    setNum(count + 1)
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div>
      <Header />
      <input
        type="text"
        onChange={handleChange}
      />
      <div>
        <button
          onClick={handleClick}
        >
          ADD
        </button>
      </div>
      <Counter count={count} /> - <Title title={title} />
    </div>
  )
}

export default App