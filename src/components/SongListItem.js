import React from 'react';


const SongListItem = props => {
  console.log('In Song List Item', props)
  return (
    <div>
      <a>{props.song.title}</a>
    </div>
  )
}

export default SongListItem
