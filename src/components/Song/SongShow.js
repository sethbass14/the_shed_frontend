import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongCard from './SongCard';
import SongNoteForm from './SongNoteForm';
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
    // console.log('In search YouTube function')
    // console.log(`${this.props.song.title} ${this.props.band.name}`
    if (!this.state.youTubeClick) {
      adapter.videos.fetchYouTube(`${this.props.band.name} ${this.props.song.title}`)
      .then(resp => {
        console.log(resp)
        this.setState({ ...this.state, videos: resp.items.splice(1) ,currentVideo: resp.items[0] })
      })
    }
    this.setState({ ...this.state, youTubeClick: !this.state.youTubeClick })
  }

  videoOnClick = video => {
    const newVideo = this.state.videos.find(stateVideo => stateVideo.id.videoId === video.id.videoId)
    const index = this.state.videos.indexOf(video)
    const oldVideo = this.state.currentVideo
    const newVideos = [...this.state.videos.slice(0, index), ...this.state.videos.slice(index + 1), this.state.currentVideo]

    this.setState({...this.state, videos: newVideos, currentVideo: video})
  }

  saveVideo = videoUrl => {
    console.log('In save video')
    this.props.addVideoUrl({ you_tube_url: `https://www.youtube.com/embed/${this.state.currentVideo.id.videoId}` }, this.props.song.id)

  }

  render() {
    // console.log('In SongShow', this.props)
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
        {/*this.props.song.id? <AudioPlayer song={this.props.song}/> : null*/}
        <div className="four wide column">
        </div>
        <div className="column">
        </div>
      </div>
    )
  }
}
// const SongShow = props => {
//   console.log('In SongShow', props)
//   return (
//     <div className='ui grid container'>
//         <div className="five wide column">
//           <h1>Some Space</h1>
//         </div>
//         <div className=" five wide column">
//           {props.song.id ? <SongCard song={props.song} band={props.band} /> : null }
//         </div>
//         <div className="six wide column">
//           {props.song.id? <SongNoteForm song={props.song} /> : null}
//         </div>
//         <div className="five wide column">
//         </div>
//           {/*props.song.id? <AudioPlayer song={props.song}/> : null*/}
//         <div className="four wide column">
//         </div>
//         <div className="column">
//         </div>
//     </div>
//   )
// }

//Check out this problem of refreshing not working down below
const mapStateToProps = (state, prevProps) => {
  const song = state.songs.find(song => song.id === parseInt(prevProps.match.params.songId))
  if (song) {
    return {
      song,
      band: state.bands.find(band => band.id === song.band_id)
    }
  } else {
    return {
      song: {}
    }
  }
}

export default withRouter(connect(mapStateToProps, actions)(SongShow))
