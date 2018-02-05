import React from 'react';


class AudioPlayer extends React.Component {
  render() {
    console.log('In the Audio Player', this.props)
    return (
      <audio controls>
        <source src={this.props.song ? this.props.song.audio : null}/>
      </audio>
    )
  }
}

export default AudioPlayer
