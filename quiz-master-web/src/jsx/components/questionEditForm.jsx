import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { editQuestion } from '../actions/editQuestion'
import { deleteQuestion } from '../actions/deleteQuestion'

require('../../scss/questionEditForm.scss')

export class QuestionEditForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      content: '',
      answer: ''
    }

    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
  }

  handleContentChange (e) {
    this.setState({content: e.target.value})
  }

  handleAnswerChange (e) {
    this.setState({answer: e.target.value})
  }

  componentWillReceiveProps (nextProps) {
    const { question } = nextProps
    this.setState({
      content: question.content,
      answer: question.answer
    })
  }

  render () {
    const { dispatch, question } = this.props
    return (
      <div className='question-edit-form'>
        <p>Edit</p>
        <form>
          <p>
            <label>
              Content:
              <input type='text' name='content' value={this.state.content} onChange={this.handleContentChange} />
            </label>
          </p>
          <p>
            <label>
              Answer:
              <input type='text' name='answer' value={this.state.answer} onChange={this.handleAnswerChange} />
            </label>
          </p>
          <input type='button' value='update' onClick={() => dispatch(editQuestion(question.id, this.state.content, this.state.answer))} />
          <input type='button' value='delete' onClick={() => dispatch(deleteQuestion(question.id))} />
        </form>
      </div>
    )
  }
}

QuestionEditForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(QuestionEditForm)
