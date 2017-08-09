import client from '../clients/quizMasterApiClient'
import { fetchQuestions } from './fetchQuestions'

export const EDIT_QUESTION_SUCCESS = 'EDIT_QUESTION_SUCCESS'
export const EDIT_QUESTION_ERROR = 'EDIT_QUESTION_ERROR'

export const EDIT_QUESTION_SUCCESS_MESSAGE = 'edit success!'
export const EDIT_QUESTION_ERROR_MESSAGE = 'edit error!'

function editQuestionSuccess () {
  return {
    type: EDIT_QUESTION_SUCCESS,
    message: EDIT_QUESTION_SUCCESS_MESSAGE
  }
}

function editQuestionError () {
  return {
    type: EDIT_QUESTION_ERROR,
    message: EDIT_QUESTION_ERROR_MESSAGE
  }
}

export const editQuestion = (id, content, answer) => {
  return dispatch => {
    return client.put(
      'questions/' + id,
      {
        content,
        answer
      }
    ).then(res => {
      dispatch(editQuestionSuccess())
      dispatch(fetchQuestions())
    }).catch(() => {
      dispatch(editQuestionError())
    })
  }
}
