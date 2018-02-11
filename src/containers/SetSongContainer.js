import React from 'react';
import SongCard from '../components/Song/SongCard';
import { connect } from 'react-redux';
import { UPDATE_SET_ORDER } from '../constants'
import * as actions from '../actions'

class SetSongContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      setSongs: []
    }
  }

  handleOrderIncrement = (setSongId) => {
    let allSetSongs = this.props.setSongs
    let setSongChangeIncrement = allSetSongs.find(setSong => setSong.id === setSongId)
    const limit = allSetSongs.length
    const change = setSongChangeIncrement.order + 1
    let setSongChangeDecrement = allSetSongs.find(setSong => setSong.order === change)
    if (change < limit) {
      setSongChangeIncrement.order = change
      }
    console.log('In handleOrderIncrement setSongId:', setSongId, 'allSetSongs', allSetSongs, "setSongChangeIncrement", setSongChangeIncrement, "limit:", limit, "change", change, "setSongChangeDecrement", setSongChangeDecrement)
    this.props.incrementSetOrder(setSongChangeIncrement)
    
  }


  render() {
    console.log('In SetSongContainer props: ', this.props)
    let songs = this.props.songs
    songs.map(song => song.order = this.props.setSongs.find(setSong => setSong.song_id === song.id).order)
    songs.sort((a, b) => a.order - b.order)
    console.log('In Set Song render songs with order:', songs)
    const songCards = this.props.songs.map((song, index) =>
    <SongCard
      key={index}
      song={song}
      setSong={true}
      setList={this.props.setList}
      handleOrderDecrement={this.handleOrderDecrement}
      handleOrderIncrement={this.handleOrderIncrement}
      order={this.props.setSongs.find(setSong => setSong.song_id === song.id).order}
      />)
    return (
      <div>
        <h4>In Set Song Container</h4>
        {songCards}
        <h4>Out of Set Song Container</h4>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    setSongs: state.setSongs.filter(setSong => setSong.set_list_id === ownProps.setList.id)
  }
}

export default connect(mapStateToProps, actions)(SetSongContainer)
