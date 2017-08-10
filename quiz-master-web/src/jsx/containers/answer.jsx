import React from 'react'
import { connect } from 'react-redux'
import AnswerQuestionsList from '../components/answerQuestionsList'

require('../../scss/answer.scss')

export var Answer = class Answer extends React.PureComponent {
  render () {
    return (
      <div className='answer'>
        <div className='answer-inner'>
          <div className='answer-header-text'>
            Let's answer the questions!
          </div>
          <AnswerQuestionsList />
        </div>
      </div>
    )
  }
}

export default connect()(Answer)
