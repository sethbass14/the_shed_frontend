import React from 'react';
import VideoCard from './VideoCard';


const VideoCardContainer = props => {
  const videoCards = props.videos.map((video, index) => <VideoCard key={index} video={video}/>)
  return (
    <div>
      {videoCards}
    </div>
  )
}

export default VideoCardContainer
