import { SET_USER_DATA, ADD_SONG, DELETE_SONG, ADD_SONG_NOTES} from '../constants'

const initialState = []


export const songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      // debugger
      return [...action.userData.songs ]
    case ADD_SONG:
      // debugger
      return [...state, action.songData]
    case DELETE_SONG:
      // debugger
      return state.filter(song => song.id !== action.resp.id)
    case ADD_SONG_NOTES:
      const song = state.find(song => song.id === action.song.id)
      const index = state.indexOf(song)
      debugger
      return [...state.slice(0, index), action.song, ...state.slice(index + 1)]
    default:
      return state
  }
}
