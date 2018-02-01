import React from 'react';
import { Link, withRouter } from 'react-router-dom';


export const Home = () =>  {
  return (
    <div className='home'>
      <h1>The Shed</h1>
      <h3>Organize Your Tune Learning all in one step</h3>
      <div>
        <Link to="/login">
          login
        </Link>
          <p>or</p>
      
      </div>
    </div>
  )
}


export default withRouter(Home)
