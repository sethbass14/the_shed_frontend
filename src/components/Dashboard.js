import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
import * as actions from '../actions'
import BandListContainer from '../containers/BandListContainer'
import SongListContainer from '../containers/SongListContainer'
import SongInput from './SongInput'


class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUserData(this.props.user.id)
  }

  render() {
    return (
      <div>
        <h1>Welcome to your dashboard, {this.props.user.username} </h1>
        <BandListContainer />
        <SongListContainer />
        <SongInput />
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


export default withAuth(connect(mapStateToProps, actions)(Dashboard))
