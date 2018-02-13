import React from 'react';
import { connect } from 'react-redux';
import UserPicInput from './UserPicInput'


class UserCard extends React.Component {
  constructor() {
    super()

    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  // console.log("In UserCard", props)
  render() {
    return (
      <div className="ui eight wide column">
        <div className="ui card">
          <div className="content">
            <h2>{this.props.user.username}</h2>
            <h3>{this.props.bands.length} bands</h3>
            <h3>{this.props.songs.length} songs</h3>
          </div>
          <div className="extra content">
            <i className="add square icon" onClick={() => this.handleClick()}></i>
            {this.state.clicked ? (
              <UserPicInput/>
            ) : (
              <p>Add Profile Pic</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    songs: state.songs,
    bands: state.bands
   }
}

export default connect(mapStateToProps)(UserCard)
