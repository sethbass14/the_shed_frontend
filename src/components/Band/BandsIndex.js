import React from 'react';
import { connect } from 'react-redux';
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
    // console.log("In the bands index", this.props)
    const allBands = this.props.bands.map((band, index) => {
      return (
        <BandCard
          key={index}
          band={band}
          bandIndex={true}
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
            <div>
              <BandInput/>
              <i className="minus circle icon" onClick={() => this.addBandClick()}/>
            </div>
          ) : (
            <div>
              <p >Add a band</p>
              <i className="add circle icon" onClick={() => this.addBandClick()}/>
            </div>
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
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsIndex)
