import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';


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

  componentDidMount() {
    if (localStorage.getItem('token')) {
      // this.props.fetchUser()
      this.props.history.push("/dashboard")
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
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input onChange={this.onChange} type='text' name='username' value={this.state.username}/>
          <br></br>
          <label>Password </label>
          <input onChange={this.onChange} type='password' name='password' value={this.state.password}/>
          <button className="ui button" type='submit'>Submit</button>
        </form>
      </div>

    )
  }
}

const mapStateToProps = state => (
  { loggedIn : !!state.currentUser.id }
)

export default withRouter(connect(null, actions)(Login));
