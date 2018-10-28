// router info
import React, { Component } from 'react';
import { Navlink } from 'react-router-dom'

import Router from './Router'

// import './App.css';

const Navigation = props => <nav>
  <ul>
    <li><Navlink to='/'>Home</Navlink></li>
    <li><Navlink to='/cart'>Home</Navlink></li>
  </ul>
  </nav>

class App extends Component {
  render() {
    return <div className='page-container'>
      <Navigation />

      {/* <h1>My Shopping Cart</h1> */}
      <Router />
    </div>  
  }
}

export default App;
