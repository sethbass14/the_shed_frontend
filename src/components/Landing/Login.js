import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      fields: {
        username: '',
        password: '',
      }
    }
  }

  onChange = (event) => {
    this.setState({
      fields: {...this.state.fields, [event.target.name]: event.target.value}
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    const { fields: { username, password } } = this.state
    this.props.loginUser(username, password, this.props.history)
  }

  render() {
    return (
      <div className="home">
        <form className="ui form login-form" onSubmit={this.handleSubmit}>
          <br></br>
          <input placeholder='Username'onChange={this.onChange} type='text' name='username' value={this.state.username}/>
          <br></br>
          <input placeholder='password'onChange={this.onChange} type='password' name='password' value={this.state.password}/>
          <br></br>
          <button className="ui button centered" type='submit'>Submit</button>
        </form>
      </div>

    )
  }
}

export default withRouter(connect(null, actions)(Login));
