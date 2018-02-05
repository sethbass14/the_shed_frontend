import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
// import SongListContainer from '../containers/SongListContainer'
import * as actions from '../actions'
import SongListItem from './SongListItem'
import SongInput from './SongInput'



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
    this.props.deleteBand(bandId)
  }


  render() {
    const bandSongs = this.props.songs.map((song, index) => { return <SongListItem key={index} song={song}/>})
    console.log('In the band show', this.props)
    // console.log(bandSongs)
    return (
      <div>
        <div>
          <h1>{this.props.band.name}</h1>
        </div>
        <div className='delet-band'>
          <i onClick={() => this.handleBandDelete(this.props.band.id)}className="remove circle icon"></i>
          <h3>Delete Band</h3>
        </div>
        <div>
          <h2>Songs</h2>
          {bandSongs}
        </div>
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

export default withAuth(connect(mapStateToProps, actions)(BandShow))
// export default BandShow
