import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from '../components/questionsList'
import QuestionAddForm from '../components/questionAddForm'

require('../../scss/manage.scss')

export var Manage = class Manage extends React.PureComponent {
  render () {
    return (
      <div>
        <div className='manage-left'>
          <QuestionsList />
        </div>
        <div className='manage-right'>
          <QuestionAddForm />
        </div>
      </div>
    )
  }
}

export default connect()(Manage)
