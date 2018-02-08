import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import SongListItem from '../Song/SongListItem'
import * as actions from '../../actions';

//Make this a class to add a search bar functionality in the future
class SetListShow extends React.Component {
  constructor(){
    super()

  }

  render() {
    console.log('In Set List Show', this.props)
    const bandSongs = this.props.bandSongs.map((song, index) =>  <SongListItem key={index} song={song}/>)
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <h1>{this.props.band.id? `${this.props.band.name} Set: ${this.props.setList.name} ${this.props.setList.date}` : null}</h1>
        </div>
        <div className="four wide column">
          <h2>Repertoire</h2>
          {bandSongs}
        </div>
        <div className="eight wide column">
          <h2>Song Cards</h2>
        </div>
        <div className="four wide column">
          <h2>Ability to add a new song to the set list</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const band = state.userData.bands.find(band => band.id === parseInt(ownProps.match.params.bandId))
  if (band) {
    const setList = band.set_lists.find(setList => setList.id === parseInt(ownProps.match.params.setListId))
    const bandSongs = state.userData.songs.filter(song => song.band_id === band.id)
    const setSongs = bandSongs.filter(song => song.set_list_ids.includes(setList.id))
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
        setList: {}
      }
  }
}


export default withRouter(connect(mapStateToProps, actions)(SetListShow))
