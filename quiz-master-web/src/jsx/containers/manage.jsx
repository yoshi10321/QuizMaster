import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from '../components/questionsList'
import QuestionEditForm from '../components/questionEditForm'

require('../../scss/manage.scss')

export var Manage = class Manage extends React.PureComponent {
  render () {
    return (
      <div className='manage'>
        <div className='manage-inner'>
          <h1 className='manage-header-text'>manage questions view</h1>
          <div className='manage-left'>
            <QuestionsList />
          </div>
          <div className='manage-right'>
            <QuestionEditForm />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Manage)
