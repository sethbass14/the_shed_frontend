import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions'


//Can you make this more react like?
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
    if (this.state.title && file) {
      formData.append("audio", file)
      formData.append("title", this.state.title)
      formData.append("band_id", this.props.bandId)
      this.props.addSong(formData, this.props.bandSlug, this.props.history)
    } else {
      alert('Please select a file to upload and enter a title.')
    }
  }

  render() {
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
          <label>Audio File</label>
          <input type="file" name="audio" accept="audio/*" id="audio_upload" onChange={this.handleAudioChange}/>
          <br></br>
          {this.props.loading ? (
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
  const band = state.bands.find(band => band.slug === prevProps.match.params.bandSlug)
  return {
    bandId: band.id,
    bandSlug: band.slug,
    loading: state.loading
  }
}



export default withRouter(connect(mapStateToProps, actions)(SongInput))
