import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
import * as actions from '../actions'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUserData(this.props.user.id)
  }

  render() {
    console.log('In the dashboard', this.props)
    return (
      <div>
        <h1>Welcome to your dashboard, {this.props.user.username} </h1>
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
