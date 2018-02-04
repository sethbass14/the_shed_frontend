import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongInput from '../components/SongInput';
import withAuth from '../hocs/withAuth';
import BandsIndex from '../components/BandsIndex';
import { connect } from 'react-redux';
import * as actions from '../actions'


class BandContainer extends React.Component {
  componentDidMount() {
    if (!this.props.userData.id) {
      this.props.fetchUserData(this.props.user.id)
    }
  }
  render() {
    return (
      <div>
        <h2> In Bands Container </h2>
        <Switch>
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
    userData: state.userData
  }
}

export default withAuth(connect(mapStateToProps, actions)(BandContainer))
