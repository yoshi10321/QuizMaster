import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { answerQuestion } from '../actions/answerQuestion'

require('../../scss/answerForm.scss')

export class AnswerForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      answer: ''
    }

    this.handleAnswerChange = this.handleAnswerChange.bind(this)
  }

  handleAnswerChange (e) {
    this.setState({answer: e.target.value})
  }

  render () {
    const { dispatch, question } = this.props
    return (
      <div className='answer-form'>
        <p>Answer</p>
        <form>
          <p>
            <label>
              Answer:
              <input type='text' name='answer' onChange={this.handleAnswerChange} />
            </label>
          </p>
          <input type='button' value='answer' onClick={() => dispatch(answerQuestion(question.id, this.state.answer))} />
        </form>
      </div>
    )
  }
}

AnswerForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.object
}

export default connect()(AnswerForm)
