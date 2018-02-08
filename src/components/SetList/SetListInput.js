import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'


class SetListInput extends React.Component {
  constructor(){
    super()

    this.state = {
      name: '',
      date: ''
    }
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.date) {
      alert('A set list must have a date!')
    } else {
      this.props.addNewSetList({...this.state, band_id: this.props.band.id})
      this.props.handleAddSetListClick()
    }
  }
//Prop of band is passed down from the parent in this case.
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
            name="name"
            value={this.state.title}
            onChange={this.handleChange}
            />
          <br></br>
          <label>Set List Date</label>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            />
          <br></br>
            <button className="ui button" type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default connect(null, actions)(SetListInput)
