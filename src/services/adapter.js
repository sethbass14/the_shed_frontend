import { API_ROOT, HEADERS } from '../constants';
import { YOU_TUBE_API_KEY } from './api-key';

const token = ()  => localStorage.getItem('token')
const headersWithToken = {...HEADERS, 'Authorization': token()}

const getWithToken = route => {
  // debugger
  return fetch(API_ROOT + route , {
    headers: headersWithToken
  }).then(res => res.json());
}

//Use this function for post requests with text only like new band or new note
const postWithToken = (route, data) => {
  return fetch(API_ROOT + route, {
    method: 'POST',
    headers: headersWithToken,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

//log in and auth
const login = (user_data) => {
    return fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(user_data)
    }).then(resp => resp.json())
}

const getCurrentUser = () => {
  return getWithToken('/current_user')
}

const getUserData = () => {
  return getWithToken('/user_data')
}

// User
const postNewUser = (user_data) => {
  return fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(user_data)
  }).then(resp => resp.json())
}

const postUserImage = (file) => {
  const token = localStorage.getItem('token')
  return fetch(`${API_ROOT}/user_data`, {
    method: 'PATCH',
    headers: { 'Authorization': token },
    body: file
  }).then(resp => resp.json())
}


//Below is everything for a song
const postNewSong = (file) => {
  // console.log(song_data)
  return fetch(`${API_ROOT}/songs`, {
    method: 'POST',
    body: file
  }).then(resp => resp.json())
}

const updateNotes = (notes, songId) => {
  return fetch(`${API_ROOT}/songs/${songId}`, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify(notes)
  }).then(resp => resp.json())
}

const updateVideo = (video, songId) => {
  return fetch(`${API_ROOT}/songs/${songId}`, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify(video)
  }).then(resp => resp.json())
}

const deleteSongServer = id => {
  return fetch(`${API_ROOT}/songs/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

//Below is everything for a band
const postNewBand = band_data => {
  return postWithToken('/bands', band_data)
}

const updateBandImage = (file, id) => {
  return fetch(`${API_ROOT}/bands/${id}`, {
    method: 'PATCH',
    body: file
  }).then(resp => resp.json())
}

const deleteBandServer = id => {
  return fetch(`${API_ROOT}/bands/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

//Below is everything about a set list
const postNewSetList = (set_list_data) => {
  return fetch(`${API_ROOT}/set_lists`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(set_list_data)
  }).then(resp => resp.json())
}

const deleteSetListServer = (id) => {
  return fetch(`${API_ROOT}/set_lists/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

const postNewSetSong = (set_song_data) => {
  return fetch(`${API_ROOT}/set_songs`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(set_song_data)
  }).then(resp => resp.json())
}

const deleteSetSongServer = id => {
  return fetch(`${API_ROOT}/set_songs/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

const updateSetSongOrder = (set_song_data) => {
  return fetch(`${API_ROOT}/set_songs/${set_song_data.id}`, {
    headers: HEADERS,
    method: 'PUT',
    body: JSON.stringify(set_song_data)
  }).then(resp => resp.json())
}

const fetchYouTube = (song_search_data) => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOU_TUBE_API_KEY}&q=${song_search_data}&type=video`).then(resp => resp.json())
}

export default {
  auth: {
    login,
    getCurrentUser,
    getUserData
  },
  users: {
    postNewUser,
    postUserImage
  },
  songs: {
    postNewSong,
    deleteSongServer,
    updateNotes,
    updateVideo
  },
  bands: {
    postNewBand,
    deleteBandServer,
    updateBandImage
  },
  setLists: {
    postNewSetList,
    deleteSetListServer
  },
  setSongs: {
    postNewSetSong,
    deleteSetSongServer,
    updateSetSongOrder
  },
  videos: {
    fetchYouTube
  }
}
