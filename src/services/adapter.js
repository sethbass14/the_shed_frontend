import { API_ROOT, HEADERS } from '../constants';
import { YOU_TUBE_API_KEY } from './api-key';


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

const updateNotes = (notes, songId) => {
  return fetch(`${API_ROOT}/songs/${songId}`, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify(notes)
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
    postNewUser
  },
  songs: {
    postNewSong,
    deleteSongServer,
    updateNotes
  },
  bands: {
    postNewBand,
    deleteBandServer
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
