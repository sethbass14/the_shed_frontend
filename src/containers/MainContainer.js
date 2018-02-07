import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
import DashboardShow from '../components/DashboardShow';
import BandContainer from './BandContainer';
import * as actions from '../actions';

class MainContainer extends React.Component {

  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchUserData(this.props.user.id)
    }
  }

  render() {
    return (
      <div className='main-container'>
        <Switch>
          <Route
            path="/bands"
            component={BandContainer}
            />
          <Route
            path="/:dashboard"
            component={DashboardShow}
            />
        </Switch>
      </div>
    )
  }
}

export default withAuth(connect(null, actions)(MainContainer))
