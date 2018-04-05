import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SongNoteForm from '../components/Song/SongNoteForm';


class SongNoteFormContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: ''
    }
  }

  componentDidMount() {
    this.setState({ notes: this.props.song.notes })
  }

  handleChange = event => {
    this.setState({ notes: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addSongNotes(this.state, this.props.song.id )
  }

  render() {
    return (
      <SongNoteForm
        handleSubmit={this.handleSubmit}
        value={this.state.notes}
        handleChange={this.handleChange}
        />
    )
  }
}

export default connect(null, actions)(SongNoteFormContainer)
