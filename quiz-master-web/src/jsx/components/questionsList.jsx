import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/fetchQuestions'

require('../../scss/questionsList.scss')

export class QuestionsList extends React.PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchQuestions())
  }

  render () {
    const { questions } = this.props
    let listItems
    if (questions) {
      listItems = questions.data.map((question) =>
        <li key={question.id} className='questions-list-item'>
          <div>
            <p>{question.content}</p>
            <p>{question.answer}</p>
          </div>
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

QuestionsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(QuestionsList)
