import React from 'react';
// import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions'


class SongInput extends React.Component {
  constructor() {
    super()

    this.state = {
      title: '',
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ title: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const audio_upload = document.getElementById('audio_upload')
    const file = audio_upload.files[0]
    const formData = new FormData()
    formData.append("audio", file)
    formData.append("title", this.state.title)
    formData.append("band_id", this.props.bandId)
    this.props.addSong(formData, this.props.history)
  }

  handleAudioChange = event => {
    // console.log(this.state)
    // const audio_upload = document.getElementById('audio_upload')
    // this.setState({ fileToBeSent: event.target.files[0] }, () => console.log(this.state))
    // const data = new FormData()
    // data.append("audio", audio_upload.files[0],
    // audio_upload.files[0].name)
    // debugger
  }

  render() {
    console.log("Song Input", this.props)
    return (
      <div>
        <h1>New Song</h1>
        <form
          className="ui form"
          id="new-song"
          onSubmit={this.handleSubmit}>
          <label>Song Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            />
          <br></br>
          <input type="file" name="audio" accept="audio/*" id="audio_upload" onChange={this.handleAudioChange}/>
          <br></br>
          {this.props.songLoading ? (
            <button className="ui loading button" type="submit">Submit</button>
          ) : (
            <button className="ui button" type="submit">Submit</button>
          )}
        </form>

      </div>
    )
  }

}

const mapStateToProps = (state, prevProps) => {
  return {
    bandId: parseInt(prevProps.match.params.bandId),
    songLoading: state.songLoading
  }
}



export default withRouter(connect(mapStateToProps, actions)(SongInput))
