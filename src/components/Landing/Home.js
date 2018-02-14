import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <h1>The Shed</h1>
        <h3>Organize your tune learning all in one place</h3>
        <div>
          <Link to="/login">
            <p>login</p>
          </Link>
          <div className="ui horizontal divider">
            <p>or</p>
          </div>
          <Link to="/signup">
            <p>sign up</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
