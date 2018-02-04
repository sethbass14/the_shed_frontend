import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import Navbar from './components/Navbar'
import Home from '../components/Home';
import Login from '../components/Login';
import DashboardContainer from './DashboardContainer';
import * as actions from '../actions';
//
//
class Landing extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUser()
      this.props.history.push("/dashboard")
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/login"
            component={Login}
            />
          <Route
            path="/dashboard"
            component={DashboardContainer}
            />
          <Route
            path="/"
            component={Home}
          />
        </Switch>
    </div>
    )
  }

}

export default withRouter(connect(null, actions))(Landing)
