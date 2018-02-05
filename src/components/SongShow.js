import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './AudioPlayer';
import withAuth from '../hocs/withAuth'



const SongShow = props => {
  console.log('In SongShow', props)
  return (
    <div>
      <div>
        {props.song? (
          <h2>{props.song.title}</h2>
        ) : (
          null
        )}
        <AudioPlayer song={props.song}/>
      </div>
    </div>
  )
}

//Check out this problem of refreshing not working down below
const mapStateToProps = (state, prevProps) => {
  return {
    band: state.userData.bands.find(band => band.id === parseInt(prevProps.match.params.bandId)),
    song: state.userData.songs.find(song => song.id === parseInt(prevProps.match.params.songId))
  }
}

export default withAuth(connect(mapStateToProps)(SongShow))
