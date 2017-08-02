import React from 'react'
import { connect } from 'react-redux'
import AnswerQuestionsList from '../components/answerQuestionsList'

require('../../scss/answer.scss')

export var Answer = class Answer extends React.PureComponent {
  render () {
    return (
      <div>
        <AnswerQuestionsList />
      </div>
    )
  }
}

export default connect()(Answer)
