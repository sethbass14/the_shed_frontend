import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BandListContainer from '../containers/BandListContainer';
// import SongListContainer from '../containers/SongListContainer';
// import BandContainer from '../containers/BandContainer';



class DashboardShow extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to your dashboard, {this.props.user.username} </h1>
        <Link to="/bands">
          <h2>Bands</h2>
        </Link>
        <BandListContainer />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DashboardShow)
