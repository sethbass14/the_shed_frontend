import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SongListItem from '../Song/SongListItem';
import SetSongContainer from '../../containers/SetSongContainer';
import BandCard from '../Band/BandCard';
import * as actions from '../../actions';

//Make this a class to add a search bar functionality in the future
class SetListShow extends React.Component {
  constructor(){
    super()

    this.state = {
      deleteClick: false,
    }
  }

  handleDeleteClick = () => {
    if (!this.state.deleteClick) {
      alert('Are you sure you want to delete this set list? There is no turning back. Click again if you are sure.')
      this.setState({ deleteClick: !this.state.deleteClick })
    } else {
      this.props.deleteSetList(this.props.setList.id, this.props.band.slug, this.props.history)
    }
  }

  handleAddSongClick = () => {
    this.setState({ ...this.state, addSongClick: !this.state.addSongClick })
  }

  render() {
    const bandSongTitles = this.props.bandSongs.map((song, index) =>  <SongListItem key={index} song={song} setList={this.props.setList}/>)
    this.props.redirect ? this.props.history.push(`/bands/${this.props.match.params.bandSlug}`) : null
    return (
        <div className="show">
          <div className="ui grid container">
            <div className="twelve wide centered column">
              {this.props.band.id? (
                  <div>
                    <h1>{this.props.band.name}</h1>
                    <h2>{this.props.setList.name} </h2>
                    <h2>{this.props.setList.date} </h2>
                  </div>
                ) : (
                  null
                )
              }
            </div>
            <div className="five wide column">
              <BandCard band={this.props.band}/>
              <div>
                <button className="ui button" onClick={() => this.handleDeleteClick()}>Delete Set List</button>
              </div>
            </div>
            <div className="five wide column">
              <h2>Build Your Set List</h2>
              <SetSongContainer songs={this.props.setSongsShow} setList={this.props.setList}/>
            </div>
            <div className="five wide column">
              <h2>Repertoire</h2>
              {bandSongTitles.length ? (
                <div>
                  <h4>Add a song to build a set list</h4>
                  {bandSongTitles}
                </div>
              ) : (
                <Link to={`/bands/${this.props.band.slug}`}>
                  {`Upload More Songs On ${this.props.band.name}'s page`}
                </Link>
              )}

            </div>
          </div>

        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const setList = state.setLists.find(setList => setList.slug === ownProps.match.params.setListSlug)
  const band = state.bands.find(band => band.slug === ownProps.match.params.bandSlug)
  if (setList) {
    let bandSongs = state.songs.filter(song => song.band_id === band.id)
    const setSongsShow = bandSongs.filter(song => song.set_list_ids.includes(setList.id))
    bandSongs = bandSongs.filter(song => !song.set_list_ids.includes(setList.id))
    return {
      band,
      bandSongs,
      setList,
      setSongsShow,
      redirect: false
    }
  // write a third statement that checks for a band and not a setlist. Add a key of redirect true and false.
  // This code below needs to be checked. Is it neccessary? 3.6.18
} else if (band && !setList) {
    return {
      band: {},
      bandSongs: [],
      setList: {},
      setSongsShow: [],
      redirect: true
    }
  } else {
    return {
      band: {},
      bandSongs: [],
      setList: {},
      setSongsShow: [],
      redirect: false
    }
  }
}


export default withRouter(connect(mapStateToProps, actions)(SetListShow))
