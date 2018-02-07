import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContainer from './containers/MainContainer';
import LandingContainer from './containers/LandingContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route
            path="/"
            component={LandingContainer}
            />
          <Route
            path="/dashboard"
            render= {MainContainer}
            />
        </Switch >
      </div>
    );
  }
}




export default withRouter(App)
