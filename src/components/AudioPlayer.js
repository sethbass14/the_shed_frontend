import React from 'react';


class AudioPlayer extends React.Component {
  render() {
    return (
      <audio controls>
        <source src="//s3.amazonaws.com/the-shed-audio-files/songs/audios/000/000/018/original/Klavenauts_Theme.mp3?1517702306"/>
      </audio>
    )
  }
}

export default AudioPlayer
