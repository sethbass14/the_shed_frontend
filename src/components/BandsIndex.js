import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import withAuth from '../hocs/withAuth'
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
    <div className="band-Index">
      <div className="page-title">
        <h1>Your Bands</h1>
      </div>
      <div className="ui grid container">
        {allBands}
      </div>
      <div className="add-band">
      <Link to="/bands/new">
        Add a band
      </Link>
    </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    bands: state.userData.bands
  }
}

export default withAuth(connect(mapStateToProps)(BandsIndex))
