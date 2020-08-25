import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/index'

// const logger = (store) => (next) => (action) => {
//   console.log('Ha ocurrido una accion')
//   next(action)
// }

const confirmDeleteTodo = (store) => (next) => (action) => {

  if (action.type === 'DELETE_TODO') {
    const delet = window.confirm('¿Esta seguro de Eliminar?')
    if (delet) {
      next(action)
    }
  } else {
    next(action)
  }

  //   setTimeout(() => {
  //     next(action)
  //   }, 1000)

  //   if (action.type !== 'ADD_TODO') {
  //     setTimeout(() => {
  //       store.dispatch({
  //         type: 'ADD_TODO',
  //         payload: {
  //           text: 'NOtas Notas',
  //           id: '2derd4',
  //           checked: false
  //         }
  //       })
  //     }, 2000)
  //   }

}

const midleware = applyMiddleware(confirmDeleteTodo, logger)

const store = createStore(rootReducer, midleware)

export default store
