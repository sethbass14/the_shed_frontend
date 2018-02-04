import React from 'react';
import { connect } from 'react';



class BandShow extends React.Component {
  render() {
    return (
      <div>
        <h1>In Band Show</h1>
        <h1>{this.props.band.name}<h1>
      </div>
    )
  }
}

mapStateToProps = state => {
  return { band = state.userData.bands.find(band => band.id === state.activeBandId) }
}

export default connect(mapStateToProps)(BandShow)
