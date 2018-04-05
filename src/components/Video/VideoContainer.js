import React from 'react';
import { connect } from 'react-redux';
import { YOU_TUBE_ROOT } from '../../constants';
import * as actions from '../../actions'
import VideoPlayer from '../Video/VideoPlayer';
import VideoCardHolder from '../Video/VideoCardHolder';
import VideoCard from './VideoCard';

//pass the song id to videoCardContainer
class VideoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      youTubeClick: false,
    }
  }

  searchYouTube = () => {
    this.youTubeToggle()
    this.props.youTubeFetch(`${this.props.band.name} ${this.props.song.title}`)
  }

  videoOnClick = video => {
    const index = this.state.videos.indexOf(video)
    const newVideos = [...this.state.videos.slice(0, index), ...this.state.videos.slice(index + 1), this.state.currentVideo]
    this.setState({...this.state, videos: newVideos, currentVideo: video})
  }

  saveVideo = videoUrl => {
    this.props.addVideoUrl({ you_tube_url: YOU_TUBE_ROOT + `${this.props.currentVideo.id.videoId}` }, this.props.song.id)

  }

  youTubeToggle = () => {
    this.setState({ ...this.state, youTubeClick: !this.state.youTubeClick })
  }

  render() {
    return (
      <div>
        <VideoPlayer  url={this.props.song.you_tube_url} video={this.state.youTubeClick ? this.props.currentVideo : null }/>
            {this.state.youTubeClick && this.props.currentVideo ? (
              <div>
                <div>
                  <button className="ui button" onClick={() => this.saveVideo()}>Save Video</button>
                </div>
                <div>
                  <p>See Less</p>
                  <i className="minus circle icon" onClick={() => this.youTubeToggle()}/>
                </div>
              </div>
            ) : (
              <div>
                {!this.props.youTubeLoading ? <button className="ui button" onClick={this.searchYouTube}>Search YouTube</button> : <button className="ui loading button" type="submit">SearchYouTube</button> }
              </div>
            ) }
            {this.state.youTubeClick && !this.props.youTubeLoading ? <VideoCardHolder videos={this.props.videos}/> : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: state.youTube.videos,
    currentVideo: state.youTube.currentVideo,
    youTubeLoading: state.youTube.youTubeLoading
  }
}

export default connect(mapStateToProps, actions)(VideoContainer)
