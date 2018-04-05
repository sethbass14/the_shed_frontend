import React from 'react';

const AudioPlayer = (props) => {
    return (
      <audio controls>
        <source src={props.song ? props.song.audio : null}/>
      </audio>
    )
}

export default AudioPlayer
