import { songsReducer } from './songs';
import {  bandsReducer } from './bands';
import { SET_USER_DATA, ADD_SONG, ADD_SONG_NOTES, DELETE_SONG, LOGOUT_USER, ADD_USER, ADD_BAND, DELETE_BAND, ADD_SET_LIST } from '../constants'

//I think I can refactor this initial state
const initialState = {
  'id': null,
  'username': null,
  'email': null,
  'bands': [
            {
              'name': null,
              'songs': [],
              'setlists': []
            }
          ]
}

export const userReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case SET_USER_DATA:
      // debugger
      return { ...action.userData,
        bands: bandsReducer(action.userData.bands, action),
        songs: songsReducer(action.userData.songs, action)
       }
    case ADD_SONG_NOTES:
      return {...state, songs: songsReducer(state.songs, action)}
    case ADD_SONG:
    case DELETE_SONG:
      return {...state, songs: songsReducer(state.songs, action)}
    case ADD_BAND:
    case DELETE_BAND:
      return {...state, bands: bandsReducer(state.bands, action), songs: songsReducer(state.songs, action)}
    case ADD_SET_LIST:
      return {...state, bands: bandsReducer(state.bands, action)}
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
