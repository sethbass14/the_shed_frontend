import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import AudioPlayer from '../AudioPlayer'
import * as actions from '../../actions'



const SongCard = props => {
  console.log("In SongCard", props)
  return (
      <div className="ui card">
        <div className="content">
          <Link to={`/bands/${props.song.band_id}/songs/${props.song.id}`}>
            <h3>{props.song.title}</h3>
          </Link>
          <h4>band:</h4> <Link to={`/bands/${props.song.band_id}`}>{props.band ? props.band.name : null}</Link>
        </div>
        <div className="extra content">
          {props.setSong? (
            <button
              className="ui button"
            >
              Remove From Set
            </button>
          ) : (
            <button
              className="ui button"
              onClick={() => props.deleteSong(props.song.id, props.history)}>
              Delete Song
            </button>
          )}
        </div>
      </div>
  )
}

const mapStateToProps = (state, prevProps) => {
  // console.log('in map State To Props PrevProps:', prevProps)
  if (state.userData.id) {
    return { band: state.userData.bands.find(band => band.id === prevProps.song.band_id) }
  } else {
    return { band: {} }
  }
}

export default withRouter(connect(mapStateToProps, actions)(SongCard))
