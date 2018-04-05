import React from 'react';
import VideoCard from './VideoCard';

const VideoCardHolder = props => {
  const videoCards = props.videos.map((video, index) => <VideoCard key={index} video={video}/>)
  return (
    <div className='video-card-container'>
        {videoCards.length ? videoCards : <h2>YouTube Search Yielded No Results!</h2>}
    </div>
  )
}

export default VideoCardHolder
