import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
import { withRouter } from 'react-router-dom'
// import SongListContainer from '../containers/SongListContainer'
import * as actions from '../actions'
import SongListItem from './SongListItem'
import SongInput from './SongInput'
import BandCard from './BandCard'



class BandShow extends React.Component {
  constructor() {
    super()

    this.state = {
      addSong: false
    }

  }

  handleSongAdd = () => {
    this.setState({ addSong: true })
  }

  handleBandDelete = (bandId) => {
    console.log('In handle Band Delete')
    this.props.deleteBand(bandId, this.props.history)
  }


  render() {
    const bandSongs = this.props.songs.map((song, index) => { return <SongListItem key={index} song={song}/>})
    console.log('In the band show', this.props)
    // console.log(bandSongs)
    return (
      <div>
        <div className="ui grid container">
          <div className="four wide column">
            <h3>Set List Placeholder</h3>
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
            <h3 onClick={() => this.handleSongAdd()}>Add A Song</h3>
            {this.state.addSong? (
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
  const band = state.userData.bands.find(band => band.id === parseInt(ownProps.match.params.bandId))
  if (band) {
    return {
      band: band,
      songs: state.userData.songs.filter(song => song.band_id === parseInt(ownProps.match.params.bandId) )
    }
  } else {
    //I'm not sure if I need this code below
    return {
      band: {},
      songs: []
     }
  }
}

export default withAuth(withRouter(connect(mapStateToProps, actions)(BandShow)))
// export default BandShow
