import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
import * as actions from '../actions'
import DashboardShow from '../components/DashboardShow'


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>In Dashboard Container</h1>
        <DashboardShow/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
  }
}


export default withAuth(connect(mapStateToProps, actions)(Dashboard))
