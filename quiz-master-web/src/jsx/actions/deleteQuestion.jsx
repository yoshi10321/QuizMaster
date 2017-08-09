import client from '../clients/quizMasterApiClient'
import { fetchQuestions } from './fetchQuestions'

export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS'
export const DELETE_QUESTION_ERROR = 'DELETE_QUESTION_ERROR'

export const DELETE_QUESTION_SUCCESS_MESSAGE = 'delete success!'
export const DELETE_QUESTION_ERROR_MESSAGE = 'delete error!'

function deleteQuestionSuccess () {
  return {
    type: DELETE_QUESTION_SUCCESS,
    message: DELETE_QUESTION_SUCCESS_MESSAGE
  }
}

function deleteQuestionError () {
  return {
    type: DELETE_QUESTION_ERROR,
    message: DELETE_QUESTION_ERROR_MESSAGE
  }
}

export const deleteQuestion = (id) => {
  return dispatch => {
    return client.delete(
      'questions/' + id
    ).then(res => {
      dispatch(deleteQuestionSuccess())
      dispatch(fetchQuestions())
    }).catch(() => {
      dispatch(deleteQuestionError())
    })
  }
}
