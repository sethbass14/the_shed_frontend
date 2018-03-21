import { ADD_SONG_START, ADD_SONG, LOADING_ERROR, ADD_BAND_IMAGE } from '../constants';

const initialState = false

export const loadingReducer = ( state = initialState, action) => {
  switch(action.type) {
    case LOADING_ERROR:
      return !state
    case ADD_SONG:
    case ADD_BAND_IMAGE:
      return initialState
    case ADD_SONG_START:
      return !state
    default:
      return state
  }
}
