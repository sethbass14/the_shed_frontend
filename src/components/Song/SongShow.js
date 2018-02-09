import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import AudioPlayer from '../AudioPlayer';
import SongCard from './SongCard'
import SongNoteForm from './SongNoteForm'

const SongShow = props => {
  console.log('In SongShow', props)
  return (
    <div className='ui grid container'>
        <div className="five wide column">
          <h1>Some Space</h1>
        </div>
        <div className=" five wide column">
          <SongCard song={props.song} />
        </div>
        <div className="six wide column">
          {props.song.id? <SongNoteForm song={props.song} /> : null}
        </div>
        <div className="five wide column">
        </div>
          {props.song.id? <AudioPlayer song={props.song}/> : null}
        <div className="four wide column">
        </div>
        <div className="column">
        </div>
    </div>
  )
}

//Check out this problem of refreshing not working down below
const mapStateToProps = (state, prevProps) => {
  const song = state.songs.find(song => song.id === parseInt(prevProps.match.params.songId))
  if (song) {
    return {
      song
    }
  } else {
    return {
      song: {}
    }
  }
}

export default withRouter(connect(mapStateToProps)(SongShow))
