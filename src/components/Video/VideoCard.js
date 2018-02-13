import React from 'react';

const VideoCard = props => {
  console.log(props.video)
  let title = props.video.snippet.title
  let thumbnail_url = props.video.snippet.thumbnails.default.url
  let description = props.video.snippet.description
  return (
    <div classname="four wide column">
    {props.video ? (
      <div>
        <img src={thumbnail_url} alt="An awesome video" onClick={() => props.videoOnClick(props.video)}></img>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    ) : (
      <div class="ui active centered inline loader"></div>
    ) }
  </div>
  )
}

export default VideoCard
