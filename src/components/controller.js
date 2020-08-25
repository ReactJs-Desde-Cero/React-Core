import React from 'react'
import { connect } from 'react-redux'
import { incrementAsync } from '../redux/actions/counterAction'

const Controller = (props) => {

  const handle = () => {
    props.dispatch(incrementAsync(1000))
  }

  return (
      <div>
          <button onClick={handle}>
              Dispatch
          </button>
          <h1>{ props.counter }</h1>
      </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Controller)
