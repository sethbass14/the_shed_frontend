import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import BandListContainer from '../containers/BandListContainer';
import SongListContainer from '../containers/SongListContainer';
import BandContainer from '../containers/BandContainer';



class DashboardShow extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to your dashboard, {this.props.user.username} </h1>
        <Link to="/bands">
          <h2>Bands</h2>
        </Link>
        <BandListContainer />
        <SongListContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(DashboardShow)
