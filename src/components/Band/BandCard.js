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
          {this.props.band.image !== "/images/original/missing.png" ? (
            <div className="image">
              <img src={this.props.band.image}></img>
            </div>
          ) : (
            null
          )}
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
            {this.props.band.id ? <p>{`${this.props.band.song_ids.length} songs`}</p> : null}
            {this.props.band.id ? <p>{`${this.props.band.set_list_ids.length} set lists`}</p> : null}
          </div>
        </div>
      </div>
    )
  }
}


export default BandCard
