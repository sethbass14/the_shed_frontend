import { API_ROOT, HEADERS } from '../constants'


const login = (user_data) => {
    return fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(user_data)
    }).then(resp => resp.json())
}

const getWithToken = url => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: { 'Authorization': token }
  }).then(res => res.json());
}

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`)
}

const getUserData = (id) => {
  // console.log('In getUserData in the adapter')
  return fetch(`${API_ROOT}/users/${id}`)
          .then(resp => resp.json())
}

const postNewUser = (user_data) => {
  return fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(user_data)
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

const deleteSongServer = id => {
  return fetch(`${API_ROOT}/songs/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

//Below is everything for a band
const postNewBand = (band_data) => {
  return fetch(`${API_ROOT}/bands`, {
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify(band_data)
  }).then(resp => resp.json())
}

const deleteBandServer = id => {
  return fetch(`${API_ROOT}/bands/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

export default {
  auth: {
    login,
    getCurrentUser,
    getUserData
  },
  users: {
    postNewUser
  },
  songs: {
    postNewSong,
    deleteSongServer
  },
  bands: {
    postNewBand,
    deleteBandServer
  }
}
