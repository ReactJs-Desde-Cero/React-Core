import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import fruits from './fruitsReducer'
import todo from './todosReducer'
import blog from './postReducer'

export default combineReducers({
  counter,
  user,
  fruits,
  todo,
  blog,
})
