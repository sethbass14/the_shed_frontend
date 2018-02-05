import { songsReducer } from './songs';
import {  bandsReducer } from './bands';
import { SET_USER_DATA, ADD_SONG, LOGOUT_USER, ADD_BAND } from '../constants'


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
    case ADD_SONG:
      // debugger
      return {...state, songs: songsReducer(state.songs, action)}
    case ADD_BAND:
      return {...state, bands: bandsReducer(state.bands, action)}
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
