import React from 'react';
import { Link } from 'react-router-dom';
import BandPicInput from './BandPicInput';

class BandCard extends React.Component {
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
    console.log('slug: ', this.props.band.slug)
    // Set default image on the backend
    // Check about the prop of band index needing to be present
    return (
        <div className="ui card opaque">
            <div className="image">
              <img src={this.props.band.image} alt="band"></img>
            </div>
          <div className="content">
            <Link
              to={`/bands/${this.props.band.slug}`} >
              <h3>{this.props.band.name}</h3>
            </Link>
          </div>
          <div className="extra content">
          {this.state.clicked ? (
            <div>
              <i className="minus square icon" onClick={() => this.handleClick()}></i>
              <BandPicInput handleAddPicClick={this.handleClick}/>
            </div>
          ) : (
            <div>
              {this.props.bandIndex ? (
                null
              ) : (
                <div>
                  <i className="add square icon" onClick={() => this.handleClick()}></i>
                  <p>Update Band Pic</p>
                </div>
              )}

            </div>
          )}
            {this.props.band.id ? <p>{this.props.band.song_ids.length} {this.props.band.song_ids.length === 1 ? 'song' : 'songs'}</p> : null}
            {this.props.band.id ? <p>{this.props.band.set_list_ids.length} {this.props.band.set_list_ids.length === 1 ? 'setlist' : 'setlists'}</p> : null}
          </div>
        </div>
    )
  }
}


export default BandCard
