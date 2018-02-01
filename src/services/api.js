import { API_ROOT, HEADERS } from '../constants'


const loginUser = (user_data) => {
    console.log('in Log in user fuction', user_data)
    return fetch(`${API_ROOT}/`)
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
  songs: {
    postNewSong
  }
}
