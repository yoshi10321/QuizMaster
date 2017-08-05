import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/fetchQuestions'
import AnswerForm from '../components/answerForm'

export class AnswerQuestionsList extends React.PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchQuestions())
  }

  render () {
    const { questions } = this.props
    let listItems

    if (questions) {
      listItems = questions.data.map((question, index) =>
        <li key={question.id}>
          <AnswerForm index={index} content={question.content} id={question.id} result={question.result} />
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
