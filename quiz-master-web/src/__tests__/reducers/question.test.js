import { SELECT_QUESTION } from '../../jsx/actions/selectQuestion'
import reducer from '../../jsx/reducers/question'

describe('question reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      id: '',
      content: '',
      answer: ''
    })
  })

  it('should handle SELECT_QUESTION', () => {
    expect(
      reducer(undefined, {
        type: SELECT_QUESTION,
        id: 1,
        content: 'how many apples?',
        answer: '1'
      })
    ).toEqual({
      id: 1,
      content: 'how many apples?',
      answer: '1'
    })
  })
})
