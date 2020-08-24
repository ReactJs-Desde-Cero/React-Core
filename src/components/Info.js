import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../redux/actions/userAction'

const Info = (props) => {
  const handleChange = (e) => {
    const name = e.target.value
    props.updateName(name)
  }

  return (
      <div>
          <h1>{props.user.name} - {props.user.country}</h1>
          {/* <button onClick={props.updateName}>
              Actualizar Nombre
          </button><br /> */}
          <input onChange={handleChange} type='text' />
          <br />
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => dispatch(updateName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
