import React from 'react';
import SongCard from '../components/Song/SongCard';
import { connect } from 'react-redux';
import { UPDATE_SET_ORDER } from '../constants'
import * as actions from '../actions'

class SetSongContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      setSongs: null
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ setSongs: nextProps.setSongs}, () => console.log('SetSongContainer local state: ', this.state))
  }

  handleOrderDecrement = (setSongId) => {
    console.log('In handleOrderDecrement', setSongId)

  }

  handleOrderIncrement = (setSongId) => {
    let allSetSongs = this.state.setSongs
    let setSongChangeIncrement = allSetSongs.find(setSong => setSong.id === setSongId)
    const limit = allSetSongs.length
    const change = setSongChangeIncrement.order + 1
    let setSongChangeDecrement = allSetSongs.find(setSong => setSong.order === change)
    if (change < limit) {
      setSongChangeIncrement.order = change
      }
    console.log('In handleOrderIncrement setSongId:', setSongId, 'allSetSongs', allSetSongs, "setSongChangeIncrement", setSongChangeIncrement, "limit:", limit, "change", change, "setSongChangeDecrement", setSongChangeDecrement)
    this.props.incrementSetOrder(setSongChangeIncrement)
    // if (change <= limit) {
    //   allSetSongs = allSetSongs.map(setSong => {
    //     if (setSong.order === change) {
    //       setSong.order = setSong.order - 1
    //   } else if (setSong.id === setSongId) {
    //       setSong.order = setSong.order + 1
    //   }
    //   return setSong
    // })
    //
    // }
    // console.log('In handleOrderIncrement', allSetSongs)
    // dispatch( { type: UPDATE_SET_ORDER, allSetSongs } )
    // this.props.incrementSetOrder()

  }


  render() {
    console.log('In SetSongContainer props: ', this.props)
    const songCards = this.props.songs.map((song, index) =>
    <SongCard
      key={index}
      song={song}
      setSong={true}
      setList={this.props.setList}
      handleOrderDecrement={this.handleOrderDecrement}
      handleOrderIncrement={this.handleOrderIncrement}
      order={this.state.setSongs.find(setSong => setSong.song_id === song.id).order}
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
