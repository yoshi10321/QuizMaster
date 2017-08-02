export const SELECT_QUESTION = 'SELECT_QUESTION'

export const selectQuestion = (id, content, answer) => {
  return dispatch => {
    dispatch({
      type: SELECT_QUESTION,
      id,
      content,
      answer
    })
  }
}
