import { combineReducers } from 'redux'
import questions from './questions'
import question from './question'

const reducer = combineReducers({
  questions,
  question
})

export default reducer
