import { DELETE_QUESTION_SUCCESS, DELETE_QUESTION_ERROR } from '../actions/deleteQuestion'
import { REGIST_QUESTION_SUCCESS, REGIST_QUESTION_ERROR } from '../actions/registQuestion'
import { EDIT_QUESTION_SUCCESS, EDIT_QUESTION_ERROR } from '../actions/editQuestion'

const defaultState = {
  message: ''
}

function notification (state = defaultState, action) {
  const {
    message
  } = action
  switch (action.type) {
  case REGIST_QUESTION_SUCCESS: {
    return Object.assign({}, state, {
      message
    })
  }
  case REGIST_QUESTION_ERROR: {
    return Object.assign({}, state, {
      message
    })
  }
  case EDIT_QUESTION_SUCCESS: {
    return Object.assign({}, state, {
      message
    })
  }
  case EDIT_QUESTION_ERROR: {
    return Object.assign({}, state, {
      message
    })
  }
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
    return defaultState
  }
}

export default notification
