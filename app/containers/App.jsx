
import React, { Component } from 'react'

import Navbar from '../components/Navbar.jsx'

export default class App extends Component {

// PROPS.CHILDREN HERE IS REACT ROUTER, NOT REACT. RIGHT...?
  render() {
    return (
            <div>
              <Navbar />
              {this.props.children}
            </div>
            )
    }
}

