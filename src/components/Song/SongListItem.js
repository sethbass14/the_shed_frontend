import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SongListItem = props => {
  // console.log('In Song List Item', props)
  return (
    <div>
      <Link to={`${props.match.url}/songs/${props.song.id}`}>
        {props.song.title}
      </Link>
    </div>
  )
}

export default withRouter(SongListItem)
