import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <div className={`ui menu`}>
        <div className={'item'}>
          <h1>The Shed Logo</h1>
        </div>
        <div className={'right menu'}>
          <div className={'item'}>
            <p>Login </p>
          </div>
          <div className={'item'}>
            <p>Sign Up </p>
          </div>
        </div>
      </div>
  )
}

export default Navbar
