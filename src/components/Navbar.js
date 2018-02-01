import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
      <div className={`ui menu`}>
        <div className={'item'}>
          <h1>The Shed Logo</h1>
        </div>
        <div className={'right menu'}>
          <div className={'item'}>
            {props.loggedIn ? (
              <p>Welcome {props.currentUser.username}!</p>
            ) : (
              <Link to="/login">
                Log In
              </Link>
            )}
          </div>
          <div className={'item'}>
            {props.loggedIn ? (
              <p>Log Out</p>
            ) : (
              <p>Sign Up </p>
            )}
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Navbar)
