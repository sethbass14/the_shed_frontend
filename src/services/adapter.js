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

const postNewSong = (file) => {
  // console.log(song_data)
  return fetch(`${API_ROOT}/songs`, {
    method: 'POST',
    body: file
  }).then(resp => resp.json())
}

export default {
  auth: {
    login,
    getCurrentUser,
    getUserData
  },
  songs: {
    postNewSong
  }
}
