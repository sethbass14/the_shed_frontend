import { API_ROOT, HEADERS } from '../constants'


const login = (user_data) => {
    console.log('in Log in user fuction', user_data)
    return fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(user_data)
    }).then(resp => resp.json())
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
    login
  },
  songs: {
    postNewSong
  }
}
