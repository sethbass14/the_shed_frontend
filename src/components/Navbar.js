import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../actions';


const Navbar = (props) => {
  return (
      <div className={`ui menu nav`}>
        <div className={'item'}>
          {props.loggedIn ? (
            <Link to="/dashboard">
              <h1 className="logo">The Shed</h1>
            </Link>
          ) : (
            <Link to="/">
              <h1>The Shed</h1>
            </Link>
          )}
        </div>
          <a className="item" onClick={() =>  window.history.back()}>
            <i className="arrow circle left icon"></i>
            <p>Back</p>
          </a>
          <a className="item" onClick={() => window.history.forward()}>
            <i className="arrow circle right icon"></i>
            <p>Forward</p>
          </a>
        <div className={'right menu'}>
          {props.loggedIn ? (
            <div className="item">
              <Link to="/bands">
                Bands
              </Link>
            </div>
          ) : (
            null
          )}
          {props.loggedIn ? (
            <div className="item">
              <Link to="/songs">
                Songs
              </Link>
            </div>
          ) : (
            null
          )}
          <div className='item'>
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
              <a
                className={'logout'}
                onClick={event => {
                  event.preventDefault();
                  props.logOutUser(props.history);
                }}>Log Out</a>
            ) : (
              <Link to="/signup">
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.username,
  currentUser: state.auth.currentUser
})

export default withRouter(connect(mapStateToProps, actions)(Navbar))
