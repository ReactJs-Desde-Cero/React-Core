import React from 'react'
import { connect } from 'react-redux'
import { addFruits } from '../redux/actions/fruitsAction'

const Fruits = ({fruit, addFruits}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const frut = e.target[0].value

    e.target[0].value = ''

    addFruits(frut)
  }

  return (
      <div>
          <h1>Frutas</h1>
          <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Ingresar Fruta'
              />
              <button>Agregar</button>
          </form>
          <ul>
              {fruit.map((fruta, index) => (
                  <li key={ fruta + index }>
                      {fruta}
                  </li>
              ))}
          </ul>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fruit: state.fruits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFruits: (fruts) => (dispatch(addFruits(fruts)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fruits)
