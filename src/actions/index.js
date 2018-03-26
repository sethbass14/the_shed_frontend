import { ASYNC_START, SET_CURRENT_USER, SET_USER_DATA, LOGOUT_USER, ADD_SONG, LOADING_ERROR, LOADING_START, ADD_SONG_NOTES, DELETE_SONG, ADD_BAND, ADD_BAND_IMAGE, DELETE_BAND, ADD_SET_LIST, DELETE_SET_LIST, ADD_SET_SONG, DELETE_SET_SONG, UPDATE_SET_SONG_ORDER, ADD_VIDEO_URL, ADD_USER_IMAGE, YOU_TUBE_LOADING, YOU_TUBE_FETCHED, VIDEO_CLICK } from '../constants'
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
  })
}

export const addUser = (user_data, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.users.postNewUser(user_data).then(userData => {
    if (userData.error) {
      alert(`${userData.error}`)
    } else {
      localStorage.setItem('token', userData.jwt)
      dispatch({ type: SET_CURRENT_USER , user: userData.user})
      history.push('/dashboard')
    }
  })
}

export const addUserImage = (file, id, handleUserPicClick) => dispatch => {
  dispatch({ type: LOADING_START })
  adapter.users.postUserImage(file, id).then(userData => {
    if (userData.error) {
      alert(`${userData.error}`)
    } else {
      handleUserPicClick()
      dispatch({ type: ADD_USER_IMAGE, userData })
    }
  })
}

export const addSong = (form_data, bandSlug, history) => dispatch => {
  dispatch({ type: LOADING_START })
  adapter.songs.postNewSong(form_data).then(songData => {
    if (songData.errors) {
      alert(`${songData.errors}`)
      dispatch({ type: LOADING_ERROR })
    }
    dispatch({ type: ADD_SONG, songData })
    debugger
    history.push(`/bands/${bandSlug}/songs/${songData.id}`)
  })
}

export const addSongNotes = (notes, songId) => dispatch => {
  dispatch({type: ASYNC_START })
  adapter.songs.updateNotes(notes, songId).then(songData => {
    if (songData.error) {
      alert(`${songData.error}`)
    } else {
      dispatch({ type: ADD_SONG_NOTES, songData })
    }
  })
}

export const addVideoUrl = (video, songId) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.songs.updateVideo(video, songId).then(songData => {
    if (songData.error) {
      alert(`${songData.errors}`)
    } else {
      dispatch({ type: ADD_VIDEO_URL, songData })
    }
  })
}

export const deleteSong = (id, bandSlug, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.songs.deleteSongServer(id).then(songData => {
    if (songData.error) {
      alert(`${songData.error}`)
    } else {
      history.push(`/bands/${bandSlug}`)
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

//The clickToggle function changes a display on the BandCard being rendered
export const addBandImage = (file, id, clickToggle) => dispatch => {
  dispatch({ type: LOADING_START })
  adapter.bands.updateBandImage(file, id).then(bandData => {
    if (bandData.error) {
      alert(`${bandData.error}`)
    } else {
      dispatch({ type: ADD_BAND_IMAGE, bandData })
      clickToggle()
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
export const addNewSetList = (set_list_data, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.setLists.postNewSetList(set_list_data).then(setList => {
    if (setList.error) {
      alert(`${setList.error}`)
    } else {
      dispatch({ type: ADD_SET_LIST, setList })
      history.push(`/bands/${setList.band_id}/setlists/${setList.id}`)
    }
  })
}

export const deleteSetList = (id, history) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.setLists.deleteSetListServer(id).then(setList => {
    if (setList.error) {
      alert(`${setList.error}`)
    } else {
      history.push(`/bands/${setList.band_id}`)
      dispatch({ type: DELETE_SET_LIST, setList })
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
  adapter.setSongs.deleteSetSongServer(id).then(setSong => {
    if (setSong.error) {
      alert(`${setSong.error}`)
    } else {
      dispatch({ type: DELETE_SET_SONG, setSong })
    }
  })
}

export const updateSetSongOrder = (set_song_data) => dispatch => {
  dispatch({ type: ASYNC_START })
  adapter.setSongs.updateSetSongOrder(set_song_data).then(setSong => {
    if (setSong.error) {
      alert(`${setSong.error}`)
    } else {
      dispatch({ type: UPDATE_SET_SONG_ORDER, setSong })
    }
  })
}

//Below are non-crud actions

export const youTubeFetch = (search_string) => dispatch => {
  dispatch({ type: YOU_TUBE_LOADING })
  adapter.videos.fetchYouTube(search_string).then(resp => {
    dispatch({ type: YOU_TUBE_FETCHED, resp })
  })
}

export const videoOnClick = video => dispatch => {
  dispatch({ type: VIDEO_CLICK, video })
}
