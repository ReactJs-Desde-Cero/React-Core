import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const confirmDeleteTodo = (store) => (next) => (action) => {

  if (action.type === 'DELETE_TODO') {
    const delet = window.confirm('¿Esta seguro de Eliminar?')
    if (delet) {
      next(action)
    }
  } else {
    next(action)
  }

}

const store = createStore(rootReducer, applyMiddleware(confirmDeleteTodo, logger, thunk))

export default store
