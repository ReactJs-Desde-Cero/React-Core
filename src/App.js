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
  console.log('%cRender <Counter />', 'color:blue');
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
})

const Title = React.memo(({ title }) => {
  console.log('%cRender <Title />', 'color:orangered');
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
})

const TitleNested = React.memo(

  ({ info }) => {
    console.log('%cRender <TitleNested />', 'color:purple');
    return (
      <div>
        <h2>{info.text}</h2>
      </div>
    )
  },
  (prevProps, nextProps) => {
    // Si retorna true no se renderiza
    // Si retorna false si se renderiza

    return prevProps.info.text === nextProps.info.text

  }
)

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
      <h2><Counter count={count} /> - <span><Title title={title} /></span></h2>
      <TitleNested
        info={{
          text: title
        }}
      />
    </div>
  )
}

export default App