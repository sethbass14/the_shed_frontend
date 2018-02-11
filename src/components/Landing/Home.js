import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>The Shed</h1>
        <h3>Organize Your Tune Learning all in one step</h3>
        <div>
          <Link to="/login">
            login
          </Link>
            <p>or</p>
          <Link to="/signup">
            sign up
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
