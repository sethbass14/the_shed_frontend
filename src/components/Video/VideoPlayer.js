import React from 'react';
import { Embed } from 'semantic-ui-react';

const VideoPlayer = props => {
  // let vidId = props.video? props.video.id.videoId : null
  let you_tube_url = props.url ? props.url : null
  let searchLink = props.video ? `https://www.youtube.com/embed/${props.video.id.videoId}` : null
  let link
  link = searchLink ? searchLink : you_tube_url
  return (
    <div>
      {link ? <Embed url={link} defaultActive={true}></Embed> : null}
    </div>
  )
}

export default VideoPlayer
