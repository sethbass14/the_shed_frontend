import React from 'react';


class SetListInput extends React.Component {
  constructor(){
    super()

    this.state = {
      name: '',
      date: ''
    }
  }

  render() {
    return (
      <div>
        <h1>New SetList</h1>
        <form
          className="ui form"
          id="new-set-list"
          onSubmit={this.handleSubmit}>
          <label>Set List Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            />
          <br></br>
          <label>Set List Date</label>
          <h2>Find a calendar picker</h2>
          <br></br>
            <button className="ui button" type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default SetListInput
