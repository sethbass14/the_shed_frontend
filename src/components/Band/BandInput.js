import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

class BandInput extends React.Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({ name:  event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.name) {
      alert('You must enter a name for the band.')
    } else {
      this.props.addBand({ ...this.state, user_id: this.props.userId  }, this.props.history)
    }
  }

  render() {
    // console.log('In band input', this.props)
    return (
      <div className="ui form">
        <form onSubmit={this.handleSubmit}>
          <label onClick={() => this.props.addBandClick()}>Band Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            />
          <br></br>
          <input className="ui button" type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
  }
}

export default withRouter(connect(mapStateToProps, actions)(BandInput))
