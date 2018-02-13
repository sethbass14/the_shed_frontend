import React from 'react';
import { Link } from 'react-router-dom';
import BandPicInput from './BandPicInput';

//This component is in inheriting a band from Band Index. Check this out if you want to reuse it.
class BandCard extends React.Component {
  // console.log("In BandCard", this.props)
  constructor() {
    super()

    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div className="ui eight wide column">
        <div className="ui card">
          <div className="content">
            <Link
              to={`/bands/${this.props.band.id}`} >
              <h3>{this.props.band.name}</h3>
            </Link>
          </div>
          <div className="extra content">
            {this.state.clicked ? (
              <div>
                <i className="minus square icon" onClick={() => this.handleClick()}></i>
                <BandPicInput/>
              </div>
            ) : (
              <div>
                <i className="add square icon" onClick={() => this.handleClick()}></i>
                <p>Update Band Pic</p>
              </div>
            )}
            {`${this.props.band.song_ids.length} songs`}
          </div>
        </div>
      </div>
    )
  }
}


export default BandCard
