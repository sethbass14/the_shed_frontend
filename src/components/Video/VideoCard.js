import React from 'react';

const VideoCard = props => {
  let thumbnail_url = props.video.snippet.thumbnails.default.url
  let description = props.video.snippet.description
  console.log("in video card thumbnail:", thumbnail_url, "description:", description)
  return (
    <div>
      <img src={thumbnail_url}></img>
      <p>{description}</p>
    </div>
  )
}

export default VideoCard
