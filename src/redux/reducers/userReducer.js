import { UPDATE_NAME } from '../actions/userAction'

const initialState = {
  name: 'Alexander',
  country: 'Peruano'
}

function user(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...initialState,
        name: action.payload.name
      }
    default:
      return state
  }
}

export default user
