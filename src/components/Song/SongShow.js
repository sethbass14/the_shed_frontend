import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongCard from './SongCard';
import SongNoteForm from './SongNoteForm';
import VideoPlayer from '../VideoPlayer';
import adapter from '../../services/adapter';


class SongShow extends React.Component {
  constructor() {
    super()
    this.state = {
      video: {}
    }
  }

  searchYouTube = () => {
    console.log('In search YouTube function')
    console.log(`${this.props.song.title} ${this.props.band.name}`)
    adapter.videos.fetchYouTube(`${this.props.song.title} ${this.props.band.name}`)
      .then(resp => this.setState({ video: resp.items[0]  }, () => console.log(this.state)))
  }

  render() {
    console.log('In SongShow', this.props)
    return (
      <div className='ui grid container'>
        <div className="five wide column">
          <VideoPlayer video={this.state.video}/>
          <button className="ui button" onClick={this.searchYouTube}>Search YouTube</button>
        </div>
        <div className=" five wide column">
          {this.props.song.id ? <SongCard song={this.props.song} band={this.props.band} /> : null }
        </div>
        <div className="six wide column">
          {this.props.song.id? <SongNoteForm song={this.props.song} /> : null}
        </div>
        <div className="five wide column">
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

export default withRouter(connect(mapStateToProps)(SongShow))
