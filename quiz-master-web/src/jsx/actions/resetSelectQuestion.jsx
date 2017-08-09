export const RESET_SELECT_QUESTION = 'RESET_SELECT_QUESTION'

export const resetSelectQuestion = () => {
  return dispatch => {
    dispatch({
      type: RESET_SELECT_QUESTION
    })
  }
}
