import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
      videos: [],
      currentVideo: null,
      youTubeClick: false
    }
  }

  searchYouTube = () => {
    if (!this.state.youTubeClick && this.props.song.id) {
      adapter.videos.fetchYouTube(`${this.props.band.name} ${this.props.song.title}`)
        .then(resp => {
          this.setState({ ...this.state, videos: resp.items.splice(1) ,currentVideo: resp.items[0] })
        })
    }
    this.setState({ ...this.state, youTubeClick: !this.state.youTubeClick })
  }

  videoOnClick = video => {
    const index = this.state.videos.indexOf(video)
    const newVideos = [...this.state.videos.slice(0, index), ...this.state.videos.slice(index + 1), this.state.currentVideo]
    this.setState({...this.state, videos: newVideos, currentVideo: video})
  }

  saveVideo = videoUrl => {
    this.props.addVideoUrl({ you_tube_url: `https://www.youtube.com/embed/${this.state.currentVideo.id.videoId}` }, this.props.song.id)

  }

  render() {
    return (
      <div className='ui grid container'>
        <div className="five wide column">
          <VideoPlayer  url={this.props.song.you_tube_url} video={this.state.currentVideo}/>
          {this.state.youTubeClick && this.state.currentVideo ? (
            <button className="ui button" onClick={() => this.saveVideo()}>Save Video</button>
          ) : (
            <button className="ui button" onClick={this.searchYouTube}>Search YouTube</button>
          ) }
        </div>
        <div className=" five wide column">
          {this.props.song.id ? <SongCard song={this.props.song} band={this.props.band} /> : null }
        </div>
        <div className="six wide column">
          {this.props.song.id? <SongNoteForm song={this.props.song} /> : null}
        </div>
        <div className="five wide column">
          {this.state.youTubeClick ? <VideoCardContainer videos={this.state.videos} videoOnClick={this.videoOnClick}/> : null}
        </div>
        <div className="five wide column">
          {<BandCard band={this.props.band} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  // console.log(prevProps)
  const song = state.songs.find(song => song.id === parseInt(prevProps.match.params.songId))
  if (song) {
    return {
      song,
      band: state.bands.find(band => band.id === song.band_id)
    }
  } else {
    return {
      song: {},
      band: {}
    }
  }
}

export default withRouter(connect(mapStateToProps, actions)(SongShow))
