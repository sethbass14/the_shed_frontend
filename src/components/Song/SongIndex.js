import React from 'react';
import { connect } from 'react-redux';
import SongCard from './SongCard'


class SongIndex extends React.Component {
  constructor(){
    super()
  }

  render() {
    let songs = this.props.songs
    songs.map(song => song.bandName = this.props.bands.find(band => band.id === song.band_id).name)
    songs.sort((a, b) => a.bandName.localeCompare(b.bandName))
    console.log(songs)
    const allSongs = songs.map((song, index) => <SongCard song={song} key={index} band={this.props.bands.find(band => band.id === song.band_id)}/>)
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
