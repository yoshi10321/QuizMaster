import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from '../components/questionsList'
import QuestionAddForm from '../components/questionAddForm'
import QuestionEditForm from '../components/questionEditForm'

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
          <QuestionEditForm />
        </div>
      </div>
    )
  }
}

export default connect()(Manage)
