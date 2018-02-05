import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import BandCard from './BandCard'



// This needs to be an index of all the user's bands
const BandsIndex = props => {
  console.log("In the bands index", props)
  const allBands = props.bands.map((band, index) => {
    return (
      <BandCard
        key={index}
        band={band}
        />
    )
  })
  return (
    <div className="ui grid container">
      In the BandsIndex
      <Link to="/bands/new">
        Add a band
      </Link>
      {allBands}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    bands: state.userData.bands
  }
}

export default connect(mapStateToProps)(BandsIndex)
