import { createStore, applyMiddleware, compose } from 'redux'
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(confirmDeleteTodo, logger, thunk)
  )
)

export default store
