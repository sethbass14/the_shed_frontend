import React from 'react';

const VideoCard = props => {
  // debugger
  let thumbnail_url = props.video.snippet.thumbnails.default.url
  let description = props.video.snippet.description
  // console.log("in video card thumbnail:", thumbnail_url, "description:", description)
  return (
    <div>
    {props.video ? (
      <div>
        <img src={thumbnail_url} onClick={() => props.videoOnClick(props.video)}></img>
        <p>{description}</p>
      </div>
    ) : (
      <div class="ui active centered inline loader"></div>
    ) }
  </div>
  )
}

export default VideoCard
