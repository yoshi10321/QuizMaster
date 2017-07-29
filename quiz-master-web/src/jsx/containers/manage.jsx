import React from 'react'
import { connect } from 'react-redux'

export var Manage = class Manage extends React.PureComponent {
  render () {
    return (
      <div>
        Manage View
      </div>
    )
  }
}

export default connect()(Manage)
