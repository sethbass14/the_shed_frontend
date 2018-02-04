import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import SongInput from './components/SongInput'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Login from './components/Login'
import DashboardContainer from './containers/DashboardContainer'
// import Audio from 'react-audioplayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div id="content">
          <Switch>
            <Route
              exact path="/"
              component={Home}
              />
            <Route
              exact path="/login"
              component={Login}
              />
            <Route
              exact path="/dashboard"
              component={DashboardContainer}
              />
          </Switch>
        </div>
      </div>
    );
  }
}



export default App;
