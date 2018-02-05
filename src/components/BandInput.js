import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
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
    this.props.addBand({ ...this.state, user_id: this.props.userId  }, this.props.history)
    // console.log(this.state)
  }

  render() {
    console.log('In band input', this.props)
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

const mapStateToProps = (state, prevProps) => {
  return {
    userId: state.userData.id,
    prevProps: prevProps
  }
}

export default withRouter(connect(mapStateToProps, actions)(BandInput))
