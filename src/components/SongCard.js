import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import AudioPlayer from './AudioPlayer'



const SongCard = props => {
  console.log("In SongCard", props)
  return (
      <div className="ui card">
        <div className="content">
          <h3>{props.song.title}</h3>
        </div>
        <div className="extra content">
          band: <Link to={`/bands/${props.song.band_id}`}>{props.band ? props.band.name : null}</Link>
        </div>
      </div>
  )
}

const mapStateToProps = (state, prevProps) => {
  console.log('in map State To Props PrevProps:', prevProps)
  if (state.userData.id) {
    return { band: state.userData.bands.find(band => band.id === prevProps.song.band_id) }
  } else {
    return { band: {} }
  }
}

export default connect(mapStateToProps)(SongCard)
