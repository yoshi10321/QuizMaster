import client from '../clients/quizMasterApiClient'

export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS'
export const DELETE_QUESTION_ERROR = 'DELETE_QUESTION_ERROR'

function deleteQuestionSuccess () {
  return {
    type: DELETE_QUESTION_SUCCESS,
    message: 'delete success!'
  }
}

function deleteQuestionError () {
  return {
    type: DELETE_QUESTION_ERROR,
    message: 'delete error!'
  }
}

export const deleteQuestion = (id) => {
  return dispatch => {
    return client.delete(
      'questions/' + id
    ).then(res => {
      dispatch(deleteQuestionSuccess())
    }).catch(() => {
      dispatch(deleteQuestionError())
    })
  }
}
