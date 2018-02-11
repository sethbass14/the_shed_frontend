import React from 'react';
import { connect } from 'react-redux';
import SongCard from './SongCard'


class SongIndex extends React.Component {
  constructor(){
    super()
  }

  render() {
    const allSongs = this.props.songs.map((song, index) => <SongCard song={song} key={index} band={this.props.bands.find(band => band.id === song.band_id)}/>)
    return (
      <div>
        <div>
          <h2>In the Song index</h2>
        </div>
        <div className="ui grid container">
          {allSongs}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs,
    bands: state.bands
  }
}

export default connect(mapStateToProps)(SongIndex)
