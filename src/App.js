import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import SongInput from './components/SongInput'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DashboardContainer from './containers/DashboardContainer'
// import Audio from 'react-audioplayer'
// import Landing from './containers/Landing'
import BandContainer from './containers/BandContainer'
// import * as actions from './actions';


//I would like a way to have a landing component to login and signup so that I can restrict access to those views in one container after a user has logged in.
class App extends Component {
  // componentWillMount() {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     this.props.fetchUser()
  //   }
  // }
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
          exact path="/signup"
          component={SignUp} />
        <Route
          exact path="/"
          component={Home}
          />
          <Route
            path="/bands"
            component={BandContainer}
            />
      </div>
    );
  }
}



// export default connect(null, actions)(App);
export default App
