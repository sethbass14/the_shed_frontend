import React from 'react';
import VideoCard from './VideoCard';

const VideoCardContainer = props => {
  const videoCards = props.videos.map((video, index) => <VideoCard videoOnClick={props.videoOnClick} key={index} video={video}/>)
  return (
    <div className='video-card-container'>
        {videoCards.length ? videoCards: <h2>YouTube Search Yielded No Results!</h2>}
    </div>

  )
}

export default VideoCardContainer
