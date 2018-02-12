import React from 'react';

const VideoPlayer = props => {
  let you_tube_url = props.url ? props.url : null
  let searchLink = props.video ? `https://www.youtube.com/embed/${props.video.id.videoId}` : null
  let link
  link = searchLink ? searchLink : you_tube_url
  return (
    <div>
      <h2>Video Player</h2>
      {link ? <iframe src={link}></iframe> : null}
    </div>
  )
}

export default VideoPlayer
