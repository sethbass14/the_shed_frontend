import { SET_USER_DATA, ADD_SET_SONG, DELETE_SONG, DELETE_SET_SONG, DELETE_SET_LIST, UPDATE_SET_SONG_ORDER, LOGOUT_USER} from '../constants'


const initialState = []
export const setSongsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.set_songs]
    case DELETE_SONG:
      return state.filter(setSong => setSong.song_id !== action.songData.id)
    case ADD_SET_SONG:
      return [...state, action.setSong]
    case DELETE_SET_SONG:
      return state.filter(setSong => setSong.id !== action.setSong.id)
    case DELETE_SET_LIST:
      return state.filter(setSong => setSong.set_list_id !== action.setList.id)
    case UPDATE_SET_SONG_ORDER:
      let setSong = state.find(setSong => setSong.id === action.setSong.id )
      let index = state.indexOf(setSong)
      setSong.order = action.setSong.order
      return [...state.slice(0, index), setSong, ...state.slice(index + 1)]
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
