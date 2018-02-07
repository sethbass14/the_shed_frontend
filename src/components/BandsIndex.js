import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import withAuth from '../hocs/withAuth';
import BandCard from './BandCard';
import BandInput from './BandInput';



// This needs to be an index of all the user's bands
class BandsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      addBandClick: false
    }

  }

  addBandClick = () => {
    this.setState({ addBandClick: !this.state.addBandClick })
  }

  render() {
    console.log("In the bands index", this.props)
    const allBands = this.props.bands.map((band, index) => {
      return (
        <BandCard
          key={index}
          band={band}
          />
      )
    })
    return (
      <div className="band-Index">
        <div className="page-title">
          <h1>Your Bands</h1>
        </div>
        <div className="add-band">
          {this.state.addBandClick ? (
            <BandInput addBandClick={this.addBandClick}/>
          ) : (
            <a onClick={() => this.addBandClick()}>Add a band</a>
          )}
        </div>
        <div className="ui grid container">
          {allBands}
        </div>
      </div>

    )
  }
}


const mapStateToProps = state => {
  return {
    bands: state.userData.bands
  }
}

export default withAuth(connect(mapStateToProps)(BandsIndex))
