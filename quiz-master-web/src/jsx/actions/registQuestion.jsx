import client from '../clients/quizMasterApiClient'
import { fetchQuestions } from './fetchQuestions'

export const REGIST_QUESTION_SUCCESS = 'REGIST_QUESTION_SUCCESS'
export const REGIST_QUESTION_ERROR = 'REGIST_QUESTION_ERROR'

export const REGIST_QUESTION_SUCCESS_MESSAGE = 'regist success!'
export const REGIST_QUESTION_ERROR_MESSAGE = 'regist error!'

function registQuestionSuccess () {
  return {
    type: REGIST_QUESTION_SUCCESS,
    message: REGIST_QUESTION_SUCCESS_MESSAGE
  }
}

function registQuestionError () {
  return {
    type: REGIST_QUESTION_SUCCESS,
    message: REGIST_QUESTION_ERROR_MESSAGE
  }
}

export const registQuestion = (content, answer) => {
  return dispatch => {
    return client.post(
      'questions',
      {
        content,
        answer
      }
    ).then(res => {
      dispatch(registQuestionSuccess())
      dispatch(fetchQuestions())
    }).catch(() => {
      dispatch(registQuestionError())
    })
  }
}
