import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import SongListItem from '../Song/SongListItem'
import SongCard from '../Song/SongCard'
import * as actions from '../../actions';

//Make this a class to add a search bar functionality in the future
class SetListShow extends React.Component {
  constructor(){
    super()

    this.state = {
      deleteClick: false
    }
  }

  handleDeleteClick = () => {
    if (!this.state.deleteClick) {
      alert('Are you sure you want to delete this set list? There is no turning back. Click again if you are sure.')
      this.setState({ deleteClick: !this.state.deleteClick })
    } else {
      this.props.deleteSetList(this.props.setList.id, this.props.history)
    }
  }

  render() {
    console.log('In Set List Show', this.props, "bandSongs:", this.props.bandSongs, "setSongs:", this.props.setSongs)
    const bandSongTitles = this.props.bandSongs.map((song, index) =>  <SongListItem key={index} song={song} setList={this.props.setList}/>)
    const setSongCards = this.props.setSongs.map((song, index) => <SongCard key={index} band={this.props.band} song={song} setSong={true} setList={this.props.setList}/>)
    // debugger
    return (
      <div className="ui grid container">
        <div className="twelve wide column">
          <h1>{this.props.band.id? `${this.props.band.name} Set: ${this.props.setList.name} ${this.props.setList.date}` : null}</h1>
        </div>
        <div className="four wide column">
          <button className="ui button" onClick={() => this.handleDeleteClick()}>Delete Set List</button>
        </div>
        <div className="four wide column">
          <h2>Repertoire</h2>
          {bandSongTitles}
        </div>
        <div className="eight wide column">
          <h2>Song Cards</h2>
          {setSongCards}
        </div>
        <div className="four wide column">
          <h2>Ability to add a new song to the set list</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const band = state.bands.find(band => band.id === parseInt(ownProps.match.params.bandId))
  const setList = state.setLists.find(setList => setList.id === parseInt(ownProps.match.params.setListId))
  if (band) {
    let bandSongs = state.songs.filter(song => song.band_id === band.id)
    const setSongs = bandSongs.filter(song => song.set_list_ids.includes(setList.id))
    bandSongs = bandSongs.filter(song => !song.set_list_ids.includes(setList.id))
    // debugger
    return {
      band,
      bandSongs,
      setList,
      setSongs
    }
  } else {
      return {
        band: {},
        bandSongs: [],
        setList: {},
        setSongs: []
      }
  }
}


export default withRouter(connect(mapStateToProps, actions)(SetListShow))
