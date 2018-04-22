import { API_ROOT, HEADERS, LOGIN_ROUTE, USERS_ROUTE, USER_DATA, SONGS_ROUTE , BANDS_ROUTE, SET_LISTS_ROUTE } from '../constants';
import { YOU_TUBE_API_KEY } from './api-key';

const token = ()  => localStorage.getItem('token')
const authorization = () => ({ 'Authorization': token() })
const headersWithToken = () => ({...HEADERS, ...authorization() })

const reqWithFile = method =>
  data => ({
      method,
      headers: authorization(),
      body: data
    })

const req = method =>
  data => ({
    method,
    headers: headersWithToken(),
    body: JSON.stringify(data)
  })

const postReqFile = reqWithFile('POST')
const patchReqFile = reqWithFile('PATCH')

const postReq = req('POST')
const patchReq = req('PATCH')

const getWithToken = route => {
  return fetch(API_ROOT + route , {
    headers: headersWithToken()
  }).then(res => res.json());
}

//Use this function for post requests with text only like new band or new note
const postWithToken = (route, data) => {
  return fetch(API_ROOT + route, postReq(data))
    .then(res => res.json())
}

const postFileWithToken = (route, data) => {
  return fetch(API_ROOT + route, postReqFile(data))
    .then(res => res.json())
}

const patchWithToken = (route, data) => {
  return fetch(API_ROOT + route, patchReq(data))
    .then(res => res.json())
}

const patchFileWithToken = (route, data) => {
  return fetch(API_ROOT + route, patchReqFile(data))
    .then(res => res.json())
}

const deleteServer = route => {
  return fetch(API_ROOT + route, {
    method: 'DELETE'
  }).then(res => res.json())
}

//log in, auth, and user data
const login = (user_data) => {
  return postWithToken(LOGIN_ROUTE, user_data)
}

const getCurrentUser = () => {
  return getWithToken('/current_user')
}

const getUserData = () => {
  return getWithToken('/user_data')
}

// User
const postNewUser = (user_data) => {
  return postWithToken(USERS_ROUTE, user_data)
}

const postUserImage = (file) => {
  return patchFileWithToken(USER_DATA, file)
}

//Below is everything for a band
const postNewBand = band_data => {
  return postWithToken(BANDS_ROUTE, band_data)
}

const updateBandImage = (file, id) => {
  return patchFileWithToken(BANDS_ROUTE + '/' + id, file)
}

const deleteBandServer = id => {
  return deleteServer(BANDS_ROUTE + '/' + id)
}

//Below is everything for a song
const postNewSong = (file) => {
  return postFileWithToken(SONGS_ROUTE, file)
}

const updateNotes = (notes, songId) => {
  return patchWithToken(SONGS_ROUTE + '/' + songId, notes)
}

//Test this function
const updateVideo = (video, songId) => {
  return patchWithToken(SONGS_ROUTE + '/' + songId, video)
}

// const updateVideo = (video, songId) => {
//   return fetch(`${API_ROOT}/songs/${songId}`, {
//     method: 'PATCH',
//     headers: HEADERS,
//     body: JSON.stringify(video)
//   }).then(resp => resp.json())
// }

//Test this
const deleteSongServer = id => {
  return deleteServer(SONGS_ROUTE + '/' + id)
}

// const deleteSongServer = id => {
//   return fetch(`${API_ROOT}/songs/${id}`, {
//     method: 'DELETE'
//   }).then(resp => resp.json())
// }

//Below is everything about a set list
const postNewSetList = (set_list_data) => {
  return postWithToken(SET_LISTS_ROUTE, set_list_data)
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

//abstract this
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
