import React from 'react';


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
    }, () => console.log(this.state.fields))
  }

  render() {
    return (
      <div>
        <form>
          <label>Username</label>
          <input onChange={this.onChange} type='text' name='username' value={this.state.username}/>
          <br></br>
          <label>Password </label>
          <input onChange={this.onChange} type='text' name='password' value={this.state.password}/>
        </form>
      </div>
    )
  }
}

export default Login
