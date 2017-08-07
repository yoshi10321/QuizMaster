import client from '../clients/quizMasterApiClient'
import { fetchQuestions } from './fetchQuestions'

export const EDIT_QUESTION_SUCCESS = 'EDIT_QUESTION_SUCCESS'
export const EDIT_QUESTION_ERROR = 'EDIT_QUESTION_ERROR'

function editQuestionSuccess () {
  return {
    type: EDIT_QUESTION_SUCCESS
  }
}

function editQuestionError () {
  return {
    type: EDIT_QUESTION_SUCCESS
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
