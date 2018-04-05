import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongCard from './SongCard';
import SongNoteFormContainer from '../../containers/SongNoteFormContainer';
import BandCard from '../Band/BandCard';
import VideoContainer from '../Video/VideoContainer';



const SongShow = props => {
  return (
    <div className="show">
      <div className='ui grid container'>
        <div className="sixteen wide centered column">
          {props.song ? <h1>Song Title:  {props.song.title}</h1> : null}
          <br></br>
          </div>
          <div className="five wide column">
            <BandCard band={props.band} />
            </div>
            <div className=" five wide column">
              {props.song.id ? <SongCard song={props.song} band={props.band} /> : null }
              <br></br>
                {props.song.id? <SongNoteFormContainer song={props.song} /> : null}
              </div>
              <div className="five wide column">
                <VideoContainer song={props.song} band={props.band}/>
                </div>
              </div>
            </div>
          )
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

export default withRouter(connect(mapStateToProps)(SongShow))
