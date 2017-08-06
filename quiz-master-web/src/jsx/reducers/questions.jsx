import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR } from '../actions/fetchQuestions'
import { ANSWER_QUESTION_SUCCESS } from '../actions/answerQuestion'

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
    return state
  }
  case ANSWER_QUESTION_SUCCESS: {
    state.data = state.data.map((item, index) => {
      if (item.id !== action.id) {
        return item
      }

      if (item.id === action.id) {
        item.result = action.result
        return item
      }
    })

    return Object.assign({}, state)
  }
  default:
    return state
  }
}

export default questions
