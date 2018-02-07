import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
// import Home from './components/Landing/Home';
// import Login from './components/Landing/Login';
// import SignUp from './components/Landing/SignUp';
import DashboardContainer from './containers/DashboardContainer';
import BandContainer from './containers/BandContainer';
import MainContainer from './containers/MainContainer';
import LandingContainer from './containers/LandingContainer';
import * as actions from './actions';


//I would like a way to have a landing component to login and signup so that I can restrict access to those views in one container after a user has logged in.
class App extends Component {
  // componentDidMount() {
  //   if (localStorage.getItem('token')) {
  //     this.props.fetchUser()
  //     // this.props.fetchUserData(this.props.user.id)
  //     this.props.history.push("/dashboard")
  //   }
  // }
  render() {
    // console.log('In the App', this.props)
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

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
    loggedIn: !!state.auth.currentUser.id
  }
}



export default withRouter(connect(mapStateToProps, actions)(App));
// export default App

// <Route
//   exact path="/login"
//   component={Login}
//   />
// <Route
//   exact path="/signup"
//   component={SignUp} />

// <Route
//   path="/dashboard"
//   component={MainContainer}
//   />
