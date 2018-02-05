import React from 'react';
import { connect } from 'react-redux';
import BandListItem from '../components/BandListItem'


class BandListContainer extends React.Component {
  render() {
    // console.log('In band list container', this.props)
    const bands = this.props.bands.map((band, index) => <BandListItem key={index} band={band}/>  )
    return (
      <div>
        <div>
          <h1>In the Band List Container</h1>
        </div>
        <div>
        {bands}
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

export default connect(mapStateToProps)(BandListContainer)
