import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../actions';


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
              <a
                className={'logout'}
                onClick={event => {
                  event.preventDefault();
                  props.logOutUser(props.history);
                }}>Log Out</a>
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

export default withRouter(connect(mapStateToProps, actions)(Navbar))
