import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import SongInput from '../components/SongInput';
import withAuth from '../hocs/withAuth';
import BandsIndex from '../components/BandsIndex';
import BandShow from '../components/BandShow';
import SongShow from '../components/SongShow'
import { connect } from 'react-redux';
import * as actions from '../actions'


class BandContainer extends React.Component {
  //This fetch request seems way unnecessary. There must be a way for this to live within a container that makes a fetch request on mount, so that on refresh, the fetch request gets made further up the tree.
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.fetchUserData(this.props.user.id)
    }
  }
  render() {
    return (
      <div>
        <h2> In Bands Container </h2>
        <Switch>
          <Route
            path="/bands/:bandId/songs/:songId"
            component={SongShow}
            />
          <Route
            path="/bands/:bandId"
            component={BandShow}
            />
          <Route
            path="/bands"
            component={BandsIndex}
            />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
    loggedIn: !!state.auth.currentUser.id
  }
}

export default withAuth(connect(mapStateToProps, actions)(BandContainer))
