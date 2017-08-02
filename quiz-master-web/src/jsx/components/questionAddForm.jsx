import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { registQuestion } from '../actions/registQuestion'

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

  render () {
    const { dispatch } = this.props
    return (
      <div className='question-add-form'>
        <p>Regist</p>
        <form>
          <p>
            <label>
              Content:
              <input type='text' name='content' onChange={this.handleContentChange} />
            </label>
          </p>
          <p>
            <label>
              Answer:
              <input type='text' name='answer' onChange={this.handleAnswerChange} />
            </label>
          </p>
          <input type='button' value='regist' onClick={() => dispatch(registQuestion(this.state.content, this.state.answer))} />
        </form>
      </div>
    )
  }
}

QuestionAddForm.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(QuestionAddForm)
