import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Meowsmp from './views/meowsmp'
import Meowsteal from './views/meowsteal'
import Profile from './views/profile'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Meowsmp} exact path="/meowsmp" />
        <Route component={Meowsteal} exact path="/meowsteal" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
