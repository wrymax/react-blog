import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Posts from './containers/Posts'

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Posts} />
    <Route path="/posts" component={Posts} />
    
  </Route>
)
export default routes
