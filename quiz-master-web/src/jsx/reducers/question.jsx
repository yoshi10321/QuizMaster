import { SELECT_QUESTION } from '../actions/selectQuestion'

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
  default:
    return state
  }
}

export default question
