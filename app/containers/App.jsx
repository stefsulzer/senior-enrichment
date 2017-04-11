import React from 'react'

// APP CONTAINS THE VARIABLE FRAME, HENCE REACT ROUTER
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// PAIRED COMPONENTS AND DISPATCHERS
import Campuses from '../components/Campuses'
import { getCampuses } from '../reducers/index'
import Navbar from '../components/Navbar'


function App() {

  return (
          <div>
            <Navbar/>
            <Router history={browserHistory}>
              <Route path='/campuses' component={Campuses} onEnter={onCampusesRender}/>

            </Router>
          </div>
          )
}


// ON ENTERS FOR APP

function onCampusesRender(nextRouterState) {
  store.dispatch(getCampuses());
}
