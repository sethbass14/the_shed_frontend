import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { YOU_TUBE_ROOT } from '../../constants';
import SongCard from './SongCard';
import SongNoteFormContainer from '../../containers/SongNoteFormContainer';
import BandCard from '../Band/BandCard';
import VideoContainer from '../Video/VideoContainer';
import * as actions from '../../actions'
// import adapter from '../../services/adapter';
// import SongShow from './SongShow'


class SongShowContainer extends React.Component {
  render() {
    return (
      <div className="show">
        <div className='ui grid container'>
          <div className="sixteen wide centered column">
            {this.props.song ? <h1>Song Title:  {this.props.song.title}</h1> : null}
            <br></br>
          </div>
          <div className="five wide column">
            <BandCard band={this.props.band} />
          </div>
          <div className=" five wide column">
            {this.props.song.id ? <SongCard song={this.props.song} band={this.props.band} /> : null }
            <br></br>
            {this.props.song.id? <SongNoteFormContainer song={this.props.song} /> : null}
          </div>
          <div className="five wide column">
            <VideoContainer song={this.props.song} band={this.props.band}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  const song = state.songs.find(song => song.slug === prevProps.match.params.songSlug)
  if (song) {
    return {
      song,
      band: state.bands.find(band => band.id === song.band_id),
    }
  } else {
    return {
      song: {},
      band: {},
    }
  }
}

export default withRouter(connect(mapStateToProps, actions)(SongShowContainer))
