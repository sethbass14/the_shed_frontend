import { ADD_SONG_START, ADD_SONG, SONG_LOADING_ERROR } from '../constants';

const initialState = false

export const songLoadingReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SONG_LOADING_ERROR:
      return !state
    case ADD_SONG:
      return initialState
    case ADD_SONG_START:
      return !state
    default:
      return state
  }
}
