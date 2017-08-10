import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/fetchQuestions'
import AnswerForm from '../components/answerForm'

require('../../scss/answerQuestionsList.scss')

export class AnswerQuestionsList extends React.PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchQuestions())
  }

  render () {
    const { dispatch, questions } = this.props
    let listItems

    if (questions) {
      listItems = questions.data.map((question, index) =>
        <li key={question.id}>
          <AnswerForm {...question} index={index} />
        </li>
      )
    }

    return (
      <div>
        <div className='mtl mbl'>
          <span className='answer-order-label' onClick={() => dispatch(fetchQuestions())}>latest</span>
          <span className='answer-order-label mlm' onClick={() => dispatch(fetchQuestions('difficult'))}>difficult</span>
        </div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

AnswerQuestionsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(AnswerQuestionsList)
