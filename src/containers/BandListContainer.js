import React from 'react';
import { connect } from 'react-redux';
import BandListItem from '../components/Band/BandListItem'


const BandListContainer = props => {
    const bands = props.bands.map((band, index) => <BandListItem key={index} band={band}/>  )
    return (
      <div>
        <div>
        {bands}
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandListContainer)
