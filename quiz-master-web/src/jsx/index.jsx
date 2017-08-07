import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer.jsx'
import Manage from './containers/manage.jsx'
import Answer from './containers/answer.jsx'
require('../scss/index.scss')

const store = applyMiddleware(thunk)(createStore)(reducer)

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/manage' component={Manage} />
        <Route exact path='/answer' component={Answer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
