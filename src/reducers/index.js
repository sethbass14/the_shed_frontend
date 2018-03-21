import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { userReducer } from './user';
import { songsReducer } from './songs';
import { bandsReducer } from './bands';
import { setListReducer } from './setList';
import { setSongsReducer } from './setSong';
import { loadingReducer } from './loading';
import {  youTubeReducer } from './youTubeReducer'


export const rootReducer = combineReducers({
  auth: authReducer,
  user : userReducer,
  bands: bandsReducer,
  songs: songsReducer,
  setLists: setListReducer,
  setSongs: setSongsReducer,
  loading: loadingReducer,
  youTube: youTubeReducer
})
