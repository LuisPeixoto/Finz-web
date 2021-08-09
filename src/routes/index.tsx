import React from 'react'
import { Switch } from 'react-router-dom'
import Home from '../pages/Home'
import User from '../pages/User'

import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import EditUser from '../pages/EditUser'

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/" exact component={Home} isPrivate />
    <Route path="/user" exact component={User} isPrivate />
    <Route path="/user/edit" exact component={EditUser} isPrivate />
  </Switch>
)

export default Routes
