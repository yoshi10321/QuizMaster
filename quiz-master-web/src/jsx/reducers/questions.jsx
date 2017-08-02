import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR } from '../actions/fetchQuestions'

const defaultState = {
  data: []
}

function questions (state = defaultState, action) {
  const {
    data
  } = action
  switch (action.type) {
  case FETCH_QUESTIONS_SUCCESS: {
    return Object.assign({}, state, {
      data
    })
  }
  case FETCH_QUESTIONS_ERROR: {
    return {}
  }
  default:
    return state
  }
}

export default questions
