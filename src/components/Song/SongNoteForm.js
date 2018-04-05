import React from 'react';

const SongNoteForm = props => {
  return (
    <div>
      <form className="ui form" onSubmit={(event) => props.handleSubmit(event)}>
        <label>Song Notes</label>
        <textarea
          className="opaque"
          value={props.value}
          onChange={(event) => props.handleChange(event)}
          >
        </textarea>
        <button className="ui button" type="submit">Save Notes</button>
      </form>
    </div>
  )
}

export default SongNoteForm
