import React from 'react';
import { connect } from 'react-redux';
import VideoCard from './VideoCard';

const VideoCardContainer = props => {
  const videoCards = props.videos.map((video, index) => <VideoCard key={index} video={video}/>)
  return (
    <div className='video-card-container'>
        {videoCards.length ? videoCards : <h2>YouTube Search Yielded No Results!</h2>}
    </div>

  )
}

const mapStateToProps = state => {
  return {
    videos: state.youTube.videos
  }
}

export default connect(mapStateToProps)(VideoCardContainer)
