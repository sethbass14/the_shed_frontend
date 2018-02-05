import { ASYNC_START, SET_CURRENT_USER, SET_USER_DATA, LOGOUT_USER, ADD_SONG, ADD_BAND, DELETE_BAND, ADD_USER } from '../constants'
import adapter from '../services/adapter'

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.login({username, password}).then(user => {
    localStorage.setItem('token', user.jwt)
    dispatch({ type: SET_CURRENT_USER , user})
    history.push('/dashboard')
  })
}

export const fetchUser = () => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user })
  });
}

export const logOutUser = (history) => {
  localStorage.removeItem('token');
  history.push('/')
  return { type: LOGOUT_USER }
}

export const fetchUserData = (id) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.auth.getUserData(id).then(userData => {
    dispatch({ type: SET_USER_DATA, userData })
  })
}

export const addUser = (user_data, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.users.postNewUser(user_data).then(userData => {
    if (userData.error) {
      alert("THERE IS AN ERROR")
    } else {
      dispatch({ type: ADD_USER, userData })
      history.push('/login')
    }
  })
}

export const addSong = (form_data) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.songs.postNewSong(form_data).then(songData => {
    dispatch({ type: ADD_SONG, songData })
  })
}

export const addBand = (band_data, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.bands.postNewBand(band_data).then(bandData => {
    dispatch({ type: ADD_BAND, bandData })
    debugger
    history.push(`/bands/${bandData.id}`)
  })
}

export const deleteBand = (id, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.bands.deleteBandServer(id).then(resp => {
    dispatch({ type: DELETE_BAND, resp })
  })
}

// export const changeActiveBandId = bandId => dispatch => {
//   // debugger
//   return dispatch({type: "CHANGE_ACTIVE_BAND_ID", id: bandId})
// }
