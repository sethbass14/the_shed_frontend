import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class SongNoteForm extends React.Component {
  constructor() {
    super()

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
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <label>Song Notes</label>
          <textarea
            className="opaque"
            value={this.state.notes}
            onChange={this.handleChange}
            >
          </textarea>
          <button className="ui button" type="submit">Save Notes</button>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(SongNoteForm)
