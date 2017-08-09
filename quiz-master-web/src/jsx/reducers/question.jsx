import { SELECT_QUESTION } from '../actions/selectQuestion'
import { RESET_SELECT_QUESTION } from '../actions/resetSelectQuestion'

const defaultState = {
  id: '',
  content: '',
  answer: ''
}

function question (state = defaultState, action) {
  const {
    id,
    content,
    answer
  } = action
  switch (action.type) {
  case SELECT_QUESTION: {
    return Object.assign({}, state, {
      id,
      content,
      answer
    })
  }
  case RESET_SELECT_QUESTION: {
    return Object.assign({}, state, defaultState)
  }
  default:
    return state
  }
}

export default question
