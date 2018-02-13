import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions';
import SongListItem from '../Song/SongListItem';
import SetListListItem from '../SetList/SetListListItem';
import SongInput from '../Song/SongInput';
import BandCard from './BandCard';
import SetListInput from '../SetList/SetListInput';



class BandShow extends React.Component {
  constructor() {
    super()

    this.state = {
      addSong: false,
      deleteClick: 0,
      addSetListClick: false
    }

  }

  handleSongAdd = () => {
    this.setState({ ...this.state, addSong: true })
  }

  handleAddSetListClick = () => {
    this.setState({ ...this.state, addSetListClick: !this.state.addSetListClick })
  }

  deleteConfirmation = (bandId) => {
    if (this.state.deleteClick > 1) {
      this.props.deleteBand(bandId, this.props.history)
      this.setState({ ...this.state, deleteClick: 0 })
    } else {
      alert('Are you sure you want to delete this band, all of its songs and setlists? Click delete again to END this band.')
    }
  }

  handleBandDelete = (bandId) => {
    console.log('In handle Band Delete')
    this.setState({ ...this.state, deleteClick: this.state.deleteClick + 1 }, () => this.deleteConfirmation(bandId))
  }


  render() {
    const bandSongs = this.props.songs.map((song, index) => <SongListItem key={index} song={song}/>)
    const bandSetLists = this.props.setLists.map((setList, index) => { return <SetListListItem key={index} setList={setList} />})
    console.log('In the band show', this.props)
    return (
      <div>
        <div className="ui grid container">
          <div className="four wide column">
            <h2>Set Lists</h2>
            {bandSetLists}
          </div>
          <div className="eight wide column">
            <div>
              {this.props.band.id ? <BandCard band={this.props.band}/> : null}
            </div>

          </div>
          <div className="four wide column">
            <div>
              <h2>Songs</h2>
              {bandSongs}
            </div>
          </div>
        </div>

      <div className="ui grid container">
        <div className="four wide column">
          <h3 onClick={() => this.handleAddSetListClick()}>Add a Set List</h3>
          {this.state.addSetListClick ? (
            <SetListInput
              handleAddSetListClick={this.handleAddSetListClick}
              band={this.props.band}
              />
          ) : (
            null
          )}
        </div>
        <div className="eight wide column">
          <button
            className="ui button"
            onClick={() => this.handleBandDelete(this.props.band.id)}>
            Delete Band
          </button>
        </div>
        <div className="four wide column">
          <div>
            <h3 onClick={() => this.props.addSongClick()}>{`Add A Song to ${this.props.band.name}'s rep!`}</h3>
            {this.props.addSongClickState ? (
              <SongInput />
              ) : (
                null
              )
            }
          </div>
        </div>
      </div>
    </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const band = state.bands.find(band => band.id === parseInt(ownProps.match.params.bandId))
  if (band) {
    return {
      band: band,
      songs: state.songs.filter(song => song.band_id === band.id),
      setLists: state.setLists.filter(setList => setList.band_id === band.id),
      addSongClickState: state.addSong,
    }
  } else {
    //I'm not sure if I need this code below
    return {
      band: {},
      songs: [],
      setLists: []
     }
  }
}

export default withRouter(connect(mapStateToProps, actions)(BandShow))
// export default BandShow
