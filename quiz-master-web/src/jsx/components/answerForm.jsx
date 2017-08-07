import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import { answerQuestion } from '../actions/answerQuestion'

require('../../scss/answerForm.scss')

const Scale = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames='answer-form-result'
  >
    {children}
  </CSSTransition>
)

Scale.propTypes = {
  children: React.PropTypes.any
}

export class AnswerForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      formValue: '',
      index: props.index,
      show: false
    }

    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.handleAnswerQuestion = this.handleAnswerQuestion.bind(this)
  }

  handleAnswerChange (e) {
    this.setState({formValue: e.target.value})
  }

  handleAnswerQuestion () {
    this.setState({show: false})
    const { dispatch, ...question } = this.props
    dispatch(answerQuestion(question.id, this.state.formValue))
  }

  componentWillReceiveProps (nextProps) {
    const { ...question } = nextProps
    if (question.result === 'correct' || question.result === 'incorrect') {
      this.setState({show: true})
    }
  }

  render () {
    const { ...question } = this.props

    let answerResult
    if (question.result === 'correct') {
      answerResult = <div className='answer-form-result'>◯</div>
    } else if (question.result === 'incorrect') {
      answerResult = <div className='answer-form-result'>×</div>
    } else {
      answerResult = <div className='answer-form-result' />
    }

    let correctRate
    if (question.correct_rate) {
      correctRate = <span>Rate {question.correct_rate.correct_rate}%</span>
    }

    return (
      <div className='answer-form'>
        <div className='answer-form-left'>
          <div>
            <h3 className='answer-form-text-h3'>Question{this.state.index + 1} {correctRate}</h3>
            <div dangerouslySetInnerHTML={{ __html: question.content }} />
          </div>
          <br />
          <h3 className='answer-form-text-h3'>Answer</h3>
          <form>
            <label>
              <input type='text' name='answer' onChange={this.handleAnswerChange} />
            </label>
            <input type='button' value='send' onClick={this.handleAnswerQuestion} />
          </form>
        </div>
        <div className='answer-form-right'>
          <Scale in={this.state.show}>
            {answerResult}
          </Scale>
        </div>
      </div>
    )
  }
}

AnswerForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  index: PropTypes.number,
  question: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(AnswerForm)
