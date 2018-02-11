import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const SongListItem = props => {
  // console.log('In Song List Item', props.setList.song_ids)
  return (
    <div>
      <Link to={`/bands/${props.song.band_id}/songs/${props.song.id}`}>
        {props.song.title}
      </Link>
      {props.setList ? (
        <i className="add circle icon"
          onClick={() => props.addSetSong({song_id: props.song.id, set_list_id: props.setList.id, order: props.setList.song_ids.length + 1})}>
        </i>
      ) : (
        null
      )}
    </div>
  )
}



export default withRouter(connect(null, actions)(SongListItem))
