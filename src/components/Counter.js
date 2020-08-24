import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions/counterAction'

const Counter = (props) => {
  return (
      <div>
          <button onClick={props.increment}>+</button>
          <button onClick={props.decrement}>-</button>
          <h1>{ props.counter }</h1>
          <h2>{props.name}</h2>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    name: state.user.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
