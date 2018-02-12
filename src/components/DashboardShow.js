import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BandListContainer from '../containers/BandListContainer';
import SongListContainer from '../containers/SongListContainer';

const DashboardShow = (props) => {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <h1>Welcome to your dashboard,  {props.user.username} </h1>
        </div>
        <div className="four wide column">
          <Link to="/bands">
            <h2>Bands</h2>
          </Link>
          <BandListContainer />
        </div>
        <div className="eight wide column">

        </div>
        <div className="four wide column">
          <Link to="/songs">
            <h2>Songs</h2>
          </Link>
          <SongListContainer />
        </div>

      </div>
    )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DashboardShow)
