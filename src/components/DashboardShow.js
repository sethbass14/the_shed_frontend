import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BandListContainer from '../containers/BandListContainer';
import SongListContainer from '../containers/SongListContainer';
import UserCard from './User/UserCard'

const DashboardShow = (props) => {
    return (
      <div className="show">
        <div className="ui grid container">
          <div className="sixteen wide centered column heading">
              <h1>Welcome to your dashboard,  {props.user.username} </h1>
          </div>
          <div className=" five wide column">
            <UserCard />
          </div>
          <div className="five wide column">
            <Link to="/bands">
              <h2>Bands</h2>
            </Link>
            <BandListContainer />
          </div>
          <div className="five wide column">
            <Link to="/songs">
              <h2>Songs</h2>
            </Link>
            <SongListContainer />
          </div>

        </div>

      </div>
    )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(DashboardShow)
