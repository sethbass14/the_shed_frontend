import React from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';

const VideoCard = props => {
  let title = props.video.snippet.title
  let thumbnail_url = props.video.snippet.thumbnails.default.url
  let description = props.video.snippet.description
  return (
    <div>
    {props.video ? (
      <div>
        <img src={thumbnail_url} alt="An awesome video" onClick={() => props.videoOnClick(props.video)}></img>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    ) : (
      <div className="ui active centered inline loader"></div>
    ) }
  </div>
  )
}

export default connect(null, actions)(VideoCard)
