// Why, oh why am I suddenly being forced to type out the .jsx the file paths...? AND ALSO CONVERT SOME OF THEM TO JSX FROM JS...?

'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import App from './containers/App'

// REACT ROUTER TO NEST URL ADDRESSES
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// PAIRED COMPONENTS AND DISPATCHERS
import Campuses from './components/Campuses.jsx'
import { getCampuses } from './reducers/index'
import Home from './components/Home.jsx'

// ON ENTERS FOR TRIGGERING DISPATCHERS
function onCampusesRender(nextRouterState) {
  store.dispatch(getCampuses());
}

//

// ROUTE CONFIGURATION: APP CONTAINS THE ALWAYS RENDERED COMPS PLUS VARIABLE PATH COMPONENTS AS CHILDREN
render (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App } >
        <IndexRoute component={ Home } />
        <Route path='campuses' component={ Campuses } onEnter={onCampusesRender} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

        /* {<Route path='students' component={Students} onEnter={} />} */
