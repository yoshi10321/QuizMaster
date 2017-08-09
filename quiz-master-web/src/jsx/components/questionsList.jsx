import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/fetchQuestions'
import { selectQuestion } from '../actions/selectQuestion'

require('../../scss/questionsList.scss')

export class QuestionsList extends React.PureComponent {
  constructor (props) {
    super(props)
    this.editQuestion = this.editQuestion.bind(this)
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchQuestions())
  }

  editQuestion (id, content, answer) {
    const { dispatch } = this.props
    dispatch(selectQuestion(id, content, answer))
  }

  render () {
    const { questions } = this.props
    let listItems
    if (questions) {
      listItems = questions.data.map((question) =>
        <li key={question.id} className='questions-list-item' onClick={() => { this.editQuestion(question.id, question.content, question.answer) }}>
          <div>
            <p>Content</p>
            <div className='questions-list-item-content' dangerouslySetInnerHTML={{ __html: question.content }} />
            <br />
            <p>Answer</p>
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
