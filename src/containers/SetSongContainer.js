import React from 'react';
import SongCard from '../components/Song/SongCard';
import { connect } from 'react-redux';
import { UPDATE_SET_ORDER } from '../constants'
// import AudioPlayer from '../components/AudioPlayer'
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
    if (change <= limit && change !== setSongChangeIncrement.order) {
      setSongChangeIncrement.order = change
      this.props.updateSetSongOrder(setSongChangeIncrement)
      }
    if (setSongChangeDecrement  && setSongChangeDecrement.order > 0) {
      setSongChangeDecrement.order = setSongChangeDecrement.order - 1
      this.props.updateSetSongOrder(setSongChangeDecrement)
    }
  }

  handleOrderDecrement = (setSongId) => {
    let allSetSongs = this.props.setSongs
    let setSongChangeDecrement = allSetSongs.find(setSong => setSong.id === setSongId)
    const change = setSongChangeDecrement.order - 1
    let setSongChangeIncrement = allSetSongs.find(setSong => setSong.order === change)
    if (change > 0) {
      setSongChangeDecrement.order = change
      this.props.updateSetSongOrder(setSongChangeDecrement)
    }
    if (setSongChangeIncrement) {
      setSongChangeIncrement.order = setSongChangeIncrement.order + 1
      this.props.updateSetSongOrder(setSongChangeIncrement)
    }

  }

  handleDelete = (id) => {
    let setSongToDelete = this.props.setSongs.find(setSong => setSong.id === id)
    let setSongArr = this.props.setSongs.filter(setSong => setSong.order > setSongToDelete.order)
    setSongArr.map(setSong => setSong.order -= 1)
    this.props.deleteSetSong(id)
    setSongArr.forEach(setSong => this.props.updateSetSongOrder(setSong))
    // console.log('in the handleDelete', setSongArr)
  }


  render() {
    // console.log('In SetSongContainer props: ', this.props)
    let songs = this.props.songs
    songs.map(song => song.order = this.props.setSongs.find(setSong => setSong.song_id === song.id).order)
    songs.sort((a, b) => a.order - b.order)
    // debugger
    // console.log('In Set Song render songs with order:', songs)
    const songCards = songs.map((song, index) => {
      // console.log("In song card interation", song)
      return (
          <SongCard
            key={index}
            song={song}
            setSong={true}
            setList={this.props.setList}
            handleOrderDecrement={this.handleOrderDecrement}
            handleOrderIncrement={this.handleOrderIncrement}
            handleDelete={this.handleDelete}
            order={song.order}
            />
        )

        }
      )
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
