import { ADD_SONG_START, ADD_SONG, SONG_LOADING_ERROR } from '../constants';

export const songLoadingReducer = (state = false, action) => {
  switch(action.type) {
    case SONG_LOADING_ERROR: 
      return !state
    case ADD_SONG:
      return false
    case ADD_SONG_START:
      return true
    default:
      return state
  }
}
