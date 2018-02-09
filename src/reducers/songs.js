import { SET_USER_DATA, ADD_SONG, DELETE_SONG, ADD_SONG_NOTES, DELETE_BAND, ADD_SET_SONG, DELETE_SET_SONG } from '../constants'


const initialState = []
export const songsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.songs]
    case ADD_SONG:
      return [...state, action.songData]
    case DELETE_SONG:
      // debugger
      return state.filter(song => song.id === action.songData.id)
    case DELETE_BAND:
      return state.filter(song => song.band_id !== action.bandData.id)
    case ADD_SET_SONG:
      debugger
      let song = state.find(song => song.id = action.setSong.song_id)
      let index = state.indexOf(song)
      song.set_song_ids = [...song.set_song_ids, action.setSong]
    default:
      return state
  }
}
// const initialState = []
//
//
// export const songsReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case SET_USER_DATA:
//       // debugger
//       return [...action.userData.songs ]
//     case ADD_SONG:
//       // debugger
//       return [...state, action.songData]
//     case DELETE_SONG:
//       // debugger
//       return state.filter(song => song.id !== action.resp.id)
//     case ADD_SONG_NOTES:
//       let song = state.find(song => song.id === action.song.id)
//       let index = state.indexOf(song)
//       // debugger
//       return [...state.slice(0, index), action.song, ...state.slice(index + 1)]
//       case DELETE_BAND:
//         return state.filter(song => song.band_id !== action.resp.band_id)
//       case ADD_SET_SONG:
//         song = state.find(song => song.id === action.setSong.payload.song_id)
//         index = state.indexOf(song)
//         song.set_list_ids = [...song.set_list_ids, action.setSong.payload.set_list_id]
//         return [...state.slice(0, index), song, ...state.slice(index + 1)]
//       case DELETE_SET_SONG:
//         song = state.find(song => song.id === action.setSong.payload.song_id)
//         index = state.indexOf(song)
//         song.set_list_ids = song.set_list_ids.filter(id => id !== action.setSong.payload.set_list_id)
//         return [...state.slice(0, index), song, ...state.slice(index + 1)]
//       default:
//       return state
//   }
// }
