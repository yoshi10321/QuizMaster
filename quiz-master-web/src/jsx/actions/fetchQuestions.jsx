import client from '../clients/quizMasterApiClient'

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS'
export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR'

function fetchQuestionsSuccess (data) {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    data
  }
}

function fetchQuestionsError () {
  return {
    type: FETCH_QUESTIONS_ERROR
  }
}

export const fetchQuestions = (order) => {
  return dispatch => {
    return client.get(
      'questions', {
        params: {
          order
        }
      }
    ).then(res => {
      dispatch(fetchQuestionsSuccess(res.data))
    }).catch(() => {
      dispatch(fetchQuestionsError())
    })
  }
}
