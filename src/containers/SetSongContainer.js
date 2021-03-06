import React from 'react';
import SongCard from '../components/Song/SongCard';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import * as actions from '../actions'

class SetSongContainer extends React.Component {

  handleOrderChange = (event, setSongId) => {
    const increment = event.target.id === 'increment'
    const upperLimit = this.props.setSongs.length
    let setSongTarget = this.props.setSongs.find(setSong => setSong.id === setSongId)
    let orderChange = increment ? setSongTarget.order + 1 : setSongTarget.order - 1
    let setSongChange = this.props.setSongs.find(setSong => setSong.order === orderChange)
    let nextOrderChange = increment ? orderChange - 1 : orderChange + 1
    if (orderChange <= upperLimit && orderChange > 0 ) {
      setSongTarget.order = orderChange
      setSongChange.order = nextOrderChange
      this.props.updateSetSongOrder(setSongTarget)
      this.props.updateSetSongOrder(setSongChange)
    }
  }

  handleDelete = (id) => {
    let setSongToDelete = this.props.setSongs.find(setSong => setSong.id === id)
    let setSongArr = this.props.setSongs.filter(setSong => setSong.order > setSongToDelete.order)
    setSongArr.map(setSong => setSong.order -= 1)
    this.props.deleteSetSong(id)
    setSongArr.forEach(setSong => this.props.updateSetSongOrder(setSong))
  }

  render() {
    let songs = this.props.songs
    songs.map(song => song.order = this.props.setSongs.find(setSong => setSong.song_id === song.id).order)
    songs.sort((a, b) => a.order - b.order)
    const songCards = songs.map((song, index) => {
      return (
          <SongCard
            key={index}
            song={song}
            setSong={true}
            setList={this.props.setList}
            handleOrderChange={this.handleOrderChange}
            handleDelete={this.handleDelete}
            order={song.order}
            />
        )

      }
    )
    return (
      <Card.Group>
        {songCards}
      </Card.Group>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    setSongs: state.setSongs.filter(setSong => setSong.set_list_id === ownProps.setList.id)
  }
}

export default connect(mapStateToProps, actions)(SetSongContainer)
