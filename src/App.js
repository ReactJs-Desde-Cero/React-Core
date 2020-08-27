import React from 'react'

export const Title = () => (
    <h1>Introduccion a Unit Testing</h1>
)

const App = () => {
  return (
      <section>
          <h1>Introduccion a Testing</h1>
          <div className='container'>
              <span num={3} active={false}>Primero</span>
              <span num='3' active='false'>Segundo</span>
          </div>
          <input type='text' />
          <input type='checkbox' />
      </section>
  )
}

export default App
