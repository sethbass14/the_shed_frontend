import { ASYNC_START, SET_CURRENT_USER, SET_USER_DATA, LOGOUT_USER, ADD_SONG_START, ADD_SONG, SONG_LOADING_ERROR, ADD_SONG_NOTES, DELETE_SONG, ADD_BAND, DELETE_BAND, ADD_USER, ADD_SONG_CLICK, ADD_SET_LIST, ADD_SET_SONG, DELETE_SET_SONG } from '../constants'
import adapter from '../services/adapter'

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.login({username, password}).then(user => {
    if (user.error) {
      alert(`${user.error}`)
    } else {
      localStorage.setItem('token', user.jwt)
      dispatch({ type: SET_CURRENT_USER , user})
      history.push('/dashboard')
    }
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

export const fetchUserData = (id, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.auth.getUserData(id).then(userData => {
    dispatch({ type: SET_USER_DATA, userData })
    // history.push("/dashboard")
  })
}

export const addUser = (user_data, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.users.postNewUser(user_data).then(userData => {
    if (userData.error) {
      alert(`${userData.error}`)
    } else {
      debugger
      localStorage.setItem('token', userData.jwt)
      dispatch({ type: SET_CURRENT_USER , user: userData.user})
      history.push('/dashboard')
      // dispatch({ type: ADD_USER, userData })
      // history.push('/login')
    }
  })
}

export const addSong = (form_data, history) => dispatch => {
  dispatch({ type: ADD_SONG_START })
  adapter.songs.postNewSong(form_data).then(songData => {
    if (songData.errors) {
      alert(`${songData.errors}`)
      dispatch({ type: SONG_LOADING_ERROR })
    }
    dispatch({ type: ADD_SONG, songData })
    history.push(`/bands/${songData.band_id}/songs/${songData.id}`)
  })
}

export const addSongNotes = (notes, songId) => dispatch => {
  dispatch({type: ASYNC_START })
  adapter.songs.updateNotes(notes, songId).then(songData => {
    // debugger
    if (songData.error) {
      alert(`${songData.error}`)
    } else {
      dispatch({ type: ADD_SONG_NOTES, songData })
    }
  })
}

export const deleteSong = (id, history) => dispatch => {
  // debugger
  dispatch({ type: ASYNC_START })
  adapter.songs.deleteSongServer(id).then(songData => {
    if (songData.error) {
      alert(`${songData.error}`)
    } else {
      history.push(`/bands/${songData.band_id}`)
      dispatch({ type: DELETE_SONG, songData })
    }
  })
}


export const addBand = (band_data, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.bands.postNewBand(band_data).then(bandData => {
    if (bandData.error) {
      alert(`${bandData.error}`)
    } else {
      dispatch({ type: ADD_BAND, bandData })
      history.push(`/bands/${bandData.id}`)
    }
  })
}

export const deleteBand = (id, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.bands.deleteBandServer(id).then(bandData => {
    if (bandData.error) {
      alert(`${bandData.error}`)
    } else {
      dispatch({ type: DELETE_BAND, bandData })
      history.push('/bands')
    }
  })
}

//Below are set list actions
export const addNewSetList = (set_list_data) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.setLists.postNewSetList(set_list_data).then(setList => {
    if (setList.error) {
      alert(`${setList.error}`)
    } else {
      dispatch({ type: ADD_SET_LIST, setList })
      // alert(`Got the response! setList id: ${setList.id}`)
    }
  })
}

export const addSetSong = (set_song_data) => dispatch => {
  adapter.setSongs.postNewSetSong(set_song_data).then(setSong => {
    if (setSong.error) {
      alert(`${setSong.error}`)
    } else {
      dispatch({ type: ADD_SET_SONG, setSong })
    }
  })
}

export const deleteSetSong = id => dispatch => {
  // debugger
  adapter.setSongs.deleteSetSongServer(id).then(setSong => {
    if (setSong.error) {
      alert(`${setSong.error}`)
    } else {
      dispatch({ type: DELETE_SET_SONG, setSong })
    }
  })
}




//Below are non-crud actions
export const addSongClick = () => dispatch => {
  dispatch({ type: ADD_SONG_CLICK, action: true})
}
