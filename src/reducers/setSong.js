import { SET_USER_DATA, ADD_SET_SONG, DELETE_SONG, DELETE_SET_SONG } from '../constants'


const initialState = []
export const setSongsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.set_songs]
    case DELETE_SONG:
      // debugger
      return state.filter(setSong => setSong.song_id !== action.songData.id)
    case ADD_SET_SONG:
      // debugger
      return [...state, action.setSong]
    case DELETE_SET_SONG:
      return state.filter(setSong => setSong.id !== action.setSong.id)
    default:
      return state
  }
}

// export const setSongReducer = (state = [], action) => {
//   switch(action.type) {
//     case ADD_SET_SONG:
//       return [...state, action.setSong]
//     default:
//       return state
//   }
// }
