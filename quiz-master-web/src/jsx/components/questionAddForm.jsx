import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { registQuestion, REGIST_QUESTION_SUCCESS_MESSAGE } from '../actions/registQuestion'

require('../../scss/questionAddForm.scss')

export class QuestionAddForm extends React.PureComponent {
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
    const { notification } = nextProps
    if (notification.message === REGIST_QUESTION_SUCCESS_MESSAGE) {
      this.setState({
        content: '',
        answer: ''
      })
    }
  }

  render () {
    const { dispatch } = this.props
    return (
      <div className='question-add-form'>
        <p>Regist</p>
        <form>
          <p>
            <label>
              Content:
              <textarea className='question-add-form-input' name='content' rows='10' value={this.state.content} onChange={this.handleContentChange} />
            </label>
          </p>
          <p>
            <label>
              Answer:
              <br />
              <input className='question-add-form-input' type='text' name='answer' value={this.state.answer} onChange={this.handleAnswerChange} />
            </label>
          </p>
          <input type='button' value='regist' onClick={() => dispatch(registQuestion(this.state.content, this.state.answer))} />
        </form>
      </div>
    )
  }
}

QuestionAddForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notification: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(QuestionAddForm)
