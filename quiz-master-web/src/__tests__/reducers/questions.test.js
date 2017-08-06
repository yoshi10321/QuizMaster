import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR } from '../../jsx/actions/fetchQuestions'
import { ANSWER_QUESTION_SUCCESS } from '../../jsx/actions/answerQuestion'
import reducer from '../../jsx/reducers/questions'

describe('questions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: []
    })
  })

  it('should handle FETCH_QUESTIONS_SUCCESS', () => {
    let mockData = [{'id': 1, 'content': 'test', 'answer': 'answer test', 'created_at': '2017-07-31T18:13:57.000Z', 'updated_at': '2017-07-31T18:13:57.000Z'}]
    let expectedData = [{'id': 1, 'content': 'test', 'answer': 'answer test', 'created_at': '2017-07-31T18:13:57.000Z', 'updated_at': '2017-07-31T18:13:57.000Z'}]
    expect(
      reducer(undefined, {
        type: FETCH_QUESTIONS_SUCCESS,
        data: mockData
      })
    ).toEqual({
      data: expectedData
    })
  })

  it('should handle FETCH_QUESTIONS_ERROR', () => {
    expect(
      reducer(undefined, {
        type: FETCH_QUESTIONS_ERROR
      })
    ).toEqual({
      data: []
    })
  })

  it('should handle ANSWER_QUESTION_SUCCESS', () => {
    let mockData = {'data': [{'id': 1, 'content': 'test', 'answer': 'answer test', 'created_at': '2017-07-31T18:13:57.000Z', 'updated_at': '2017-07-31T18:13:57.000Z'}]}
    let expectedData = [{'id': 1, 'content': 'test', 'answer': 'answer test', 'created_at': '2017-07-31T18:13:57.000Z', 'updated_at': '2017-07-31T18:13:57.000Z', 'result': 'correct'}]
    expect(
      reducer(mockData, {
        type: ANSWER_QUESTION_SUCCESS,
        id: 1,
        result: 'correct'
      })
    ).toEqual({
      data: expectedData
    })
  })
})
