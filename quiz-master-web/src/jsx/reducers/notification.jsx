import { DELETE_QUESTION_SUCCESS, DELETE_QUESTION_ERROR } from '../actions/deleteQuestion'

const defaultState = {
  message: ''
}

function notification (state = defaultState, action) {
  const {
    message
  } = action
  switch (action.type) {
  case DELETE_QUESTION_SUCCESS: {
    return Object.assign({}, state, {
      message
    })
  }
  case DELETE_QUESTION_ERROR: {
    return Object.assign({}, state, {
      message
    })
  }
  default:
    return state
  }
}

export default notification
