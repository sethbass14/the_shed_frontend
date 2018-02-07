import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
// import SongInput from '../components/SongInput';
import withAuth from '../hocs/withAuth';
import BandsIndex from '../components/BandsIndex';
import BandShow from '../components/BandShow';
import SongShow from '../components/SongShow';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import * as actions from '../actions'


class BandContainer extends React.Component {
  render() {
    console.log('In Bands Container', this.props)
    return (
      <div className="bands-container">
        <h2> In Bands Container </h2>
        <Switch>
          <Route
            path="/bands/:bandId/songs/:songId"
            component={SongShow}
            />
          <Route
            path="/bands/new"
            component={BandInput}
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
