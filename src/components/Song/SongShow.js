import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { YOU_TUBE_ROOT } from '../../constants';
import SongCard from './SongCard';
import SongNoteForm from './SongNoteForm';
import BandCard from '../Band/BandCard';
import VideoPlayer from '../Video/VideoPlayer';
import VideoCardContainer from '../Video/VideoCardContainer';
import * as actions from '../../actions'
import adapter from '../../services/adapter';


class SongShow extends React.Component {
  constructor() {
    super()
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
    console.log("In the render method", this.props)
    return (
      <div className="show">
        <div className='ui grid container'>
          <div className="sixteen wide centered column">
            {this.props.song ? <h1>Song Title:  {this.props.song.title}</h1> : null}
            <br></br>
          </div>
          <div className="five wide column">
            <BandCard band={this.props.band} />
          </div>
          <div className=" five wide column">
            {this.props.song.id ? <SongCard song={this.props.song} band={this.props.band} /> : null }
            <br></br>
            {this.props.song.id? <SongNoteForm song={this.props.song} /> : null}
          </div>
          <div className="five wide column">
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
                {!this.props.youTubeLoading ? <button className="ui button" onClick={this.searchYouTube}>Search YouTube</button> : <button className="ui loading button" type="submit">Submit</button> }

              </div>

            ) }
            {this.state.youTubeClick && !this.props.youTubeLoading ? <VideoCardContainer/> : null }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  const song = state.songs.find(song => song.slug === prevProps.match.params.songSlug)
  if (song) {
    return {
      song,
      band: state.bands.find(band => band.id === song.band_id),
      videos: state.youTube.videos,
      currentVideo: state.youTube.currentVideo,
      youTubeLoading: state.youTube.youTubeLoading
    }
  } else {
    return {
      song: {},
      band: {},
      videos: [],
      currentVideo: null,
      youTubeLoading: false
    }
  }
}

export default withRouter(connect(mapStateToProps, actions)(SongShow))
