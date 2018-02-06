import { SET_USER_DATA, ADD_SONG, DELETE_SONG } from '../constants'

const initialState = []


export const songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      // debugger
      return [...action.userData.songs ]
    case ADD_SONG:
      // debugger
      return [...state, action.songData]
    case DELETE_SONG:
      return state.filter(song => song.id !== action.resp.id)
    default:
      return state
  }
}
