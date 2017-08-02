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

export const fetchQuestions = () => {
  return dispatch => {
    return client.get(
      'questions'
    ).then(res => {
      dispatch(fetchQuestionsSuccess(res.data))
    }).catch(() => {
      dispatch(fetchQuestionsError())
    })
  }
}
