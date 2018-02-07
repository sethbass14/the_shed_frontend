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

  componentWillMount() {
    this.setState({ notes: this.props.song.notes })
  }

  handleChange = event => {
    this.setState({ notes: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log('In Song Note Form handleSubmit')
    this.props.addSongNotes(this.state, this.props.song.id )


  }

  render() {
    // console.log('In Song Note Form', this.props)
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <label>Song Notes</label>
          <textarea
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
