import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class BandInput extends React.Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    // debugger
    this.setState({ name:  event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand({ ...this.state, user_id: this.props.userId  })
    // console.log(this.state)
  }

  render() {
    // console.log('In band input', this.props)
    return (
      <div className="new-band">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            />
          <br></br>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { userId: state.userData.id}
}

export default connect(mapStateToProps, actions)(BandInput)
