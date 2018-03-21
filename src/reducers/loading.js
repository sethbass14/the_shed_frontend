import { ADD_SONG, LOADING_ERROR, ADD_BAND_IMAGE, LOADING_START, ADD_USER_IMAGE } from '../constants';

const initialState = false

export const loadingReducer = ( state = initialState, action) => {
  switch(action.type) {
    case LOADING_ERROR:
      return !state
    case ADD_SONG:
    case ADD_BAND_IMAGE:
    case ADD_USER_IMAGE:
      return !state
    case LOADING_START:
      return !state
    default:
      return state
  }
}
