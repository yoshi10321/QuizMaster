import { combineReducers } from 'redux'
import questions from './questions'
import question from './question'
import notification from './notification'

const reducer = combineReducers({
  questions,
  question,
  notification
})

export default reducer
