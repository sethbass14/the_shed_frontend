import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
import DashboardContainer from './DashboardContainer';
import BandContainer from './BandContainer'
import BandsIndex from '../components/BandsIndex';
import BandShow from '../components/BandShow';
import SongShow from '../components/SongShow';
import BandInput from '../components/BandInput';
import * as actions from '../actions'

class MainContainer extends React.Component {

  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchUserData(this.props.user.id)
    }
  }

  render() {
    // console.log('In Main Container', this.props)
    return (
      <div>
        <h1>In Main Container</h1>
        <Switch>
          <Route
            path="/dashboard"
            component={DashboardContainer}
            />
          <Route
            path="/bands"
            component={BandContainer}
            />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}


export default withAuth(connect(mapStateToProps, actions)(MainContainer))


// <Route
//   path="/bands/:bandId/songs/:songId"
//   component={SongShow}
//   />
// <Route
//   path="/bands/new"
//   component={BandInput}
//   />
// <Route
//   path="/bands/:bandId"
//   component={BandShow}
//   />
// <Route
//   path="/bands"
//   component={BandsIndex}
//   />
