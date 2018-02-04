import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import SongInput from './components/SongInput'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import DashboardContainer from './containers/DashboardContainer'
// import Audio from 'react-audioplayer'
import Landing from './containers/Landing'


//I would like a way to have a landing component to login and signup so that I can restrict access to those views in one container after a user has logged in.
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route
          path="/dashboard"
          component={DashboardContainer}
          />
        <Route
          exact path="/login"
          component={Login}
          />
        <Route
          exact path="/"
          component={Home}
          />
      </div>
    );
  }
}



export default App;
