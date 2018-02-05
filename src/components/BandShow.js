import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
import SongListContainer from '../containers/SongListContainer'
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


  render() {
    const bandSongs = this.props.band.songs.map((song, index) => { return <SongListItem key={index} song={song}/>})
    console.log('In the band show', this.props)
    // console.log(bandSongs)
    return (
      <div>
        <div>
          <h1>{this.props.band.name}</h1>
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
  const band = state.userData.bands.find(band => band.id === parseInt(ownProps.match.params.id))
  if (band) {
    return {
      band: band,
      bandId: state.activeBandId
    }
  } else {
    return { band: { songs: [] } }
  }
}

export default withAuth(connect(mapStateToProps)(BandShow))
// export default BandShow
