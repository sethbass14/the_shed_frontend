import React from 'react';
import { connect } from 'react-redux'
import BandListContainer from '../containers/BandListContainer'
import SongListContainer from '../containers/SongListContainer'


class DashboardShow extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to your dashboard, {this.props.user.username} </h1>
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
