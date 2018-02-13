import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import SongListItem from '../Song/SongListItem'
import SetSongContainer from '../../containers/SetSongContainer'
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
    console.log('In set List show:', this.props)
    const bandSongTitles = this.props.bandSongs.map((song, index) =>  <SongListItem key={index} song={song} setList={this.props.setList}/>)
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
          <SetSongContainer songs={this.props.setSongsShow} setList={this.props.setList}/>
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
  const setListExists = band && setList
  if (setList) {
    let bandSongs = state.songs.filter(song => song.band_id === band.id)
    const setSongsShow = bandSongs.filter(song => song.set_list_ids.includes(setList.id))
    bandSongs = bandSongs.filter(song => !song.set_list_ids.includes(setList.id))
    return {
      band,
      bandSongs,
      setList,
      setSongsShow,
      exist: (band && !setList)
    }
  // write a third statement that checks for a band and not a setlist. Add a key of redirect true and false.
  } else {
      return {
        band: {},
        bandSongs: [],
        setList: {},
        setSongsShow: []
      }
  }
}


export default withRouter(connect(mapStateToProps, actions)(SetListShow))
