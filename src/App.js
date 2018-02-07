import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DashboardContainer from './containers/DashboardContainer'
import BandContainer from './containers/BandContainer'
import MainContainer from './containers/MainContainer'
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
            path="/:dashboard"
            component={MainContainer}
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
