import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { userReducer } from './user';
import { songsReducer } from './songs';
import { bandsReducer } from './bands';
import { addSongReducer } from './addSong';
import { setListReducer } from './setList';
import { setSongsReducer } from './setSong';
import { songLoadingReducer } from './songLoading';
import {  youTubeReducer } from './youTubeReducer'
// import { youTubeLoading } from './youTubeLoading';


export const rootReducer = combineReducers({
  auth: authReducer,
  user : userReducer,
  bands: bandsReducer,
  songs: songsReducer,
  setLists: setListReducer,
  setSongs: setSongsReducer,
  addSong: addSongReducer,
  songLoading: songLoadingReducer,
  youTube: youTubeReducer
  // youTubeLoading: youTubeLoading

})
