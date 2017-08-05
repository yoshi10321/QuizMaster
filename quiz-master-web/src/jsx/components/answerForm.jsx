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
      id: props.id,
      content: props.content,
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
    const { dispatch } = this.props
    dispatch(answerQuestion(this.state.id, this.state.formValue))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.result === 'correct' || nextProps.result === 'incorrect') {
      this.setState({show: true})
    }
  }

  render () {
    const { result } = this.props

    let answerResult
    if (result === 'correct') {
      answerResult = <div className='answer-form-result'>◯</div>
    } else if (result === 'incorrect') {
      answerResult = <div className='answer-form-result'>×</div>
    } else {
      answerResult = <div className='answer-form-result' />
    }

    return (
      <div className='answer-form'>
        <div className='answer-form-left'>
          <div>
            <h3 className='answer-form-text-h3'>Question{this.state.index + 1}</h3>
            <p>{this.state.content}</p>
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
  id: PropTypes.number,
  content: PropTypes.string,
  result: PropTypes.string
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(AnswerForm)
