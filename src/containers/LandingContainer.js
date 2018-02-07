import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import MainContainer from './MainContainer';


class LandingContainer extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token') && (window.location.pathname === '/' || window.location.pathname === '/signup' || window.location.pathname === '/login')) {
      this.props.history.push("/dashboard")
    }
  }

  render() {
    return (
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
        </Switch>
    )
  }
}

export default LandingContainer
