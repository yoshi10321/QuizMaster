import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/fetchQuestions'
import AnswerForm from '../components/answerForm'

require('../../scss/questionsList.scss')

export class AnswerQuestionsList extends React.PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchQuestions())
  }

  render () {
    const { questions } = this.props
    let listItems
    if (questions) {
      listItems = questions.data.map((question) =>
        <li key={question.id} className='answer-questions-list-item'>
          <div>
            <p>{question.content}</p>
          </div>
          <AnswerForm />
        </li>
      )
    }

    return (
      <div>
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
