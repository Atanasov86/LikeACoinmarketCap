import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
  </Switch>
)

export default Routes
