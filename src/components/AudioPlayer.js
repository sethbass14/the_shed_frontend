import React from 'react';
// import { connect } from 'react-router-dom'


class AudioPlayer extends React.Component {

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.song && this.props.song.audio.src !== nextProps.song.audio) {
  //
  //   }
  // }

  render() {
    console.log('in audio player song title:', this.props.song.title, "in audio player song url:", this.props.song.audio)
    return (
      <audio controls>
        <source src={this.props.song ? this.props.song.audio : null}/>
      </audio>
    )
  }
}

export default AudioPlayer
