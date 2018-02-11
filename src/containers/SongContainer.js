import React from 'react';
import { connect } from 'react-redux'

class SongContainer extends React.Component {
  constructor() {
    super()
  }

  render(){
    console.log('In the song container props:', this.props)
    return (
      <div className='ui grid container'>
        <h1>In the Song Container</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(SongContainer)
