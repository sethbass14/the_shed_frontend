import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'


class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      fields: {
        username: '',
        email: '',
        password: ''
      }
    }
  }

  handleChange = event => {
    this.setState({ fields: {...this.state.fields, [event.target.name]: event.target.value} })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addUser(this.state.fields, this.props.history)
  }

  render() {
    return (
      <div className="home">
        <h1 id='sign-up'>Sign Up</h1>
        <form onSubmit={this.handleSubmit} className="ui form login-form">
          <br></br>
          <input placeholder="username"type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}/>
          <br></br>
          <br></br>
          <input placeholder="email"type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}/>
          <br></br>
          <br></br>
          <input placeholder="password"type="text" name="password" value={this.state.fields.password} onChange={this.handleChange}/>
          <br></br>
          <button type="submit" className="ui button centered">Submit</button>
      </form>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(SignUp))
