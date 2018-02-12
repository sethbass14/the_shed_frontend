import React from 'react';

const VideoPlayer = props => {
  let link = props.video ? `https://www.youtube.com/embed/${props.video.id.videoId}` : 'https://imgur.com/EFeHhr5'
  return (
    <div>
      <h2>Video Player</h2>
      {props.video ? <iframe src={link}></iframe> : null}
    </div>
  )
}

export default VideoPlayer
