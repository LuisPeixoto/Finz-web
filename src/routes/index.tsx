import React from 'react'
import { Switch } from 'react-router-dom'
import Home from '../pages/Home'

import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/" exact component={Home} isPrivate />
  </Switch>
)

export default Routes
