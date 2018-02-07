import { ADD_SONG_START, ADD_SONG } from '../constants';

export const songLoadingReducer = (state = false, action) => {
  switch(action.type) {
    case ADD_SONG:
      return false
    case ADD_SONG_START:
      return true
    default:
      return state
  }
}
