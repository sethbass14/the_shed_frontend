import React from 'react';
import { connect } from 'react-redux';

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


export default connect(mapStateToProps)(Dashboard)
