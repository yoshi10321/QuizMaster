import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { editQuestion, EDIT_QUESTION_SUCCESS_MESSAGE } from '../actions/editQuestion'
import { deleteQuestion } from '../actions/deleteQuestion'
import { registQuestion, REGIST_QUESTION_SUCCESS_MESSAGE } from '../actions/registQuestion'
import { resetSelectQuestion } from '../actions/resetSelectQuestion'

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
    const { question, notification, dispatch } = nextProps
    this.setState({
      content: question.content,
      answer: question.answer
    })

    if (notification.message === REGIST_QUESTION_SUCCESS_MESSAGE ||
    notification.message === EDIT_QUESTION_SUCCESS_MESSAGE) {
      dispatch(resetSelectQuestion())
    }
  }

  render () {
    const { dispatch, question } = this.props

    return (
      <div className='question-edit-form'>
        <form>
          <p>
            <label>Content</label>
            <textarea className='question-edit-form-input mts' name='content' rows='10' value={this.state.content} onChange={this.handleContentChange} />
          </p>
          <div className='question-edit-form-preview'>
            <p dangerouslySetInnerHTML={{ __html: this.state.content }} />
          </div>
          <br />
          <p>
            <label>Answer</label>
            <input className='question-edit-form-input mts' type='text' name='answer' value={this.state.answer} onChange={this.handleAnswerChange} />
          </p>
          <br />
          <input type='button' value='regist' onClick={() => dispatch(registQuestion(this.state.content, this.state.answer))} />
          <input type='button' value='update' onClick={() => dispatch(editQuestion(question.id, this.state.content, this.state.answer))} />
          <input type='button' value='delete' onClick={() => dispatch(deleteQuestion(question.id))} />
        </form>
      </div>
    )
  }
}

QuestionEditForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.object,
  notification: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(QuestionEditForm)
