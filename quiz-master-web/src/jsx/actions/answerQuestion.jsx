import client from '../clients/quizMasterApiClient'

export const ANSWER_QUESTION_SUCCESS = 'ANSWER_QUESTION_SUCCESS'
export const ANSWER_QUESTION_ERROR = 'ANSWER_QUESTION_ERROR'

function answerQuestionSuccess (id, result) {
  return {
    type: ANSWER_QUESTION_SUCCESS,
    id,
    result
  }
}

function answerQuestionError () {
  return {
    type: ANSWER_QUESTION_SUCCESS
  }
}

export const answerQuestion = (id, answer) => {
  return dispatch => {
    return client.post(
      'questions/' + id + '/answer',
      {
        answer
      }
    ).then(res => {
      dispatch(answerQuestionSuccess(id, res.data.result))
    }).catch(() => {
      dispatch(answerQuestionError())
    })
  }
}
