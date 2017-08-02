import client from '../clients/quizMasterApiClient'

export const REGIST_QUESTION_SUCCESS = 'REGIST_QUESTION_SUCCESS'
export const REGIST_QUESTION_ERROR = 'REGIST_QUESTION_ERROR'

function registQuestionSuccess () {
  return {
    type: REGIST_QUESTION_SUCCESS
  }
}

function registQuestionError () {
  return {
    type: REGIST_QUESTION_SUCCESS
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
    }).catch(() => {
      dispatch(registQuestionError())
    })
  }
}
