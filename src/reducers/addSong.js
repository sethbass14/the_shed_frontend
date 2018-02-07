import { ADD_SONG_CLICK, ADD_SONG } from '../constants'


export const addSongReducer = (state = false, action) => {
  switch(action.type) {
    case ADD_SONG:
      return false
    case ADD_SONG_CLICK:
      return !state
    default:
      return state
  }
}
