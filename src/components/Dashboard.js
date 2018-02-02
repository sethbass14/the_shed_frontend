import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'

class Dashboard extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Welcome to your dashboard, </h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}


export default withAuth(connect(mapStateToProps)(Dashboard))
