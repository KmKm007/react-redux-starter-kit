// We only need to import the modules necessary for initial render
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeRoute, CounterRoute } from './routes'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomeRoute} />
      <Route path="/counter" component={CounterRoute} />
    </Switch>
  </Router>
)

export default MainRouter
