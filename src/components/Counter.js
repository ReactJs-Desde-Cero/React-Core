import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store'

const Counter = (props) => {
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
  //     type: 'DECREMENT'
  //   })
  // }

  return (
      <div>
          <button onClick={props.increment}>+</button>
          <button onClick={props.decrement}>-</button>
          <h1>{props.count}</h1>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// Maneras de Conectar
// const CounterConnected = connect()(Counter)

// export default CounterConnected
