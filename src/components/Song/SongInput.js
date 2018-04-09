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
      audio: '',
    }
  }

  handleTitleChange = event => {
    event.preventDefault()
    this.setState({ title: event.target.value })
  }

  handleAudioChange = event => {
    event.preventDefault()
    const file = event.target.files[0]
    this.setState({ audio: file })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { title, audio } = this.state
    if (title && audio) {
      const formData = new FormData()
      formData.append("audio", audio)
      formData.append("title", title)
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
            onChange={this.handleTitleChange}
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
