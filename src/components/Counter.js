import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store'

const Counter = ({ increment, decrement, counter, name }) => {
  // const inc = () => {
  //   props.dispatch(increment())
  // }

  // const dec = () => {
  //   props.dispatch(decrement())
  // }

  // const increment = () => {
  //   props.dispatch({
  //     type: 'INCREMENT'
  //   })
  // }

  // const decrement = () => {
  //   props.dispatch({
  //     type: 'INCREMENT'
  //   })
  // }

  return (
      <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <h1>{counter}</h1>
          <h2>{name}</h2>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// Maneras de Exportar
// const CounterConnect = connect()(Counter)
// export default CounterConnect
