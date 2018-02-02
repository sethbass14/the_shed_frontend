import React from 'react';
// import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import adapter  from '../services/adapter'


class SongInput extends React.Component {
  constructor() {
    super()

    this.state = {
      title: '',
      fileToBeSent: [],

    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ title: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("In the handleSubmit", this)
    console.log("The state in handlesubmit", this.state)
    const audio_upload = document.getElementById('audio_upload')
    const file = audio_upload.files[0]
    const formData = new FormData()
    formData.append("audio", file)
    // debugger
    adapter.songs.postNewSong(formData)
  }

  handleAudioChange = event => {
    // console.log(this.state)
    const audio_upload = document.getElementById('audio_upload')
    this.setState({ fileToBeSent: event.target.files[0] }, () => console.log(this.state))
    // const data = new FormData()
    // data.append("audio", audio_upload.files[0],
    // audio_upload.files[0].name)
    // debugger
  }

  render() {
    // console.log("Song Input", this.props)
    return (
      <div className='dropzone'>
        <h1>New Song</h1>
        <form id="new-song"
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
          <input type="submit"/>
        </form>

      </div>
    )
  }

}



export default (SongInput)
