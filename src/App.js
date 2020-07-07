import React, { useState, useReducer } from 'react'
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

const reducer = (state, action) => {

  switch (action.type) {

    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }

    case 'TITLE':
      return {
        ...state,
        title: action.title
      }

    default:
      break;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    title: 'Hola'
  })

  const handleTitle = (e) => {
    dispatch({
      type: 'TITLE',
      title: e.target.value
    })
  }

  const handleAdd = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }

  const handleRemove = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }

  return (
    <div>
      <Header />
      <input
        type="text"
        value={state.title}
        onChange={handleTitle}
      />
      <div>
        <button
          onClick={handleAdd}
        >
          INCREMENT
        </button>
        <button
          onClick={handleRemove}
        >
          DECREMENT
        </button>
      </div>
      <h1>{state.count} - {state.title}</h1>
    </div>
  )
}

export default App