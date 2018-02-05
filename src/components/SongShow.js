import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './AudioPlayer';
import withAuth from '../hocs/withAuth'



const SongShow = props => {
  console.log('In SongShow', props)
  return (
    <div>
      <div>
        {props.song.id? (
          <div>
            <h2>{props.song.title}</h2>
            <AudioPlayer song={props.song}/>
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  )
}

//Check out this problem of refreshing not working down below
const mapStateToProps = (state, prevProps) => {
  if (state.userData.id) {
    return {
      band: state.userData.bands.find(band => band.id === parseInt(prevProps.match.params.bandId)),
      song: state.userData.songs.find(song => song.id === parseInt(prevProps.match.params.songId))
    }
  } else {
    return {
      band: {},
      song: {}
    }
  }
}

export default withAuth(connect(mapStateToProps)(SongShow))
