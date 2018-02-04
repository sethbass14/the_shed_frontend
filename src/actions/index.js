// import { AYSNC_START, SET_CURRENT_USER } from './types'
import adapter from '../services/adapter'

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: "ASYNC_START" });
  adapter.auth.login({username, password}).then(user => {
    localStorage.setItem('token', user.jwt)
    dispatch({ type: "SET_CURRENT_USER" , user})
    history.push('/dashboard')
  })
}

export const fetchUser = () => dispatch => {
  dispatch({ type: 'AYSNC_START' })
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: 'SET_CURRENT_USER', user })
    // history.push('/dashboard')
  });
}

export const logOutUser = (history) => {
  localStorage.removeItem('token');
  history.push('/')
  return { type: 'LOGOUT_USER' }
}

export const fetchUserData = (id) => dispatch => {
  // console.log('In fetchUserData')
  dispatch({ type: 'AYSNC_START' })
  adapter.auth.getUserData(id).then(userData => {
    // debugger
    dispatch({ type: 'SET_USER_DATA', userData })
    //Next step is to set up
  })
}

export const changeActiveBandId = bandId => dispatch => {
  // debugger
  return dispatch({type: "CHANGE_ACTIVE_BAND_ID", id: bandId})
}
