import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { userReducer } from './user'
import { songsReducer } from './songs'
import { addSongReducer } from './addSong'
import { songLoadingReducer } from './songLoading'
// import { activeBandIdReducer } from './activeBandIdReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  userData : userReducer,
  addSong: addSongReducer,
  songLoading: songLoadingReducer

})

// export default rootReducer
