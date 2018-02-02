import { API_ROOT, HEADERS } from '../constants'


const login = (user_data) => {
    console.log('in Log in user fuction', user_data)
    return fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(user_data)
    }).then(resp => resp.json())
}

const getWithToken = url => {
  const token = localStorage.getItem('token');
  console.log(token)
  return fetch(url, {
    headers: { 'Authorization': token }
  }).then(res => res.json());
}

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`)
}

const postNewSong = (song_data) => {
  // console.log(song_data)
  return fetch(`${API_ROOT}/songs`, {
    HEADERS,
    method: 'POST',
    body: JSON.stringify({song_data})
  })
}

export default {
  auth: {
    login,
    getCurrentUser
  },
  songs: {
    postNewSong
  }
}
