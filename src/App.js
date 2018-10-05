import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
// import Dashboard from './component/Dashboard/Dashboard';
// import Wizard from './component/Wizard/Wizard';
import { Link } from 'react-router-dom';
import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <Dashboard/>
        <Wizard/> */}
        <Link to="/" className='links'>Dashboard</Link>
        <Link to="/wizard" className='links'>Wizard</Link>
       
        { route }
      </div>
    );
  }
}

export default App;
