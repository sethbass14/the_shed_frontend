import React from 'react';
import { connect } from 'react-redux';



const SongShow = props => {
  console.log('In SongShow', props)
  return (
    <div>
      In the Song Show Div
    </div>
  )
}

const mapStateToProps = (state, prevProps) => {
  return {
    band: state.userData.bands.find(band => band.id === parseInt(prevProps.match.params.bandId))
  }
}

export default connect(mapStateToProps)(SongShow)
