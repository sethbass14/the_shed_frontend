import { SET_USER_DATA, ADD_SET_LIST, DELETE_SET_LIST, DELETE_BAND, ADD_SET_SONG, DELETE_SET_SONG, LOGOUT_USER } from '../constants'

const initialState = []
export const setListReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.set_lists]
    case DELETE_BAND:
      return state.filter(setList => setList.band_id !== action.bandData.id)
    case ADD_SET_LIST:
      return [...state, action.setList]
    case DELETE_SET_LIST:
      return state.filter(setList => setList.id !== action.setList.id)
    case ADD_SET_SONG:
    case DELETE_SET_SONG:
      let setList = state.find(setList => setList.id === action.setSong.set_list_id)
      let index = state.indexOf(setList)
      setList.song_ids = setListSongIdReducer(setList.song_ids, action)
      return [...state.slice(0, index), setList, ...state.slice(index + 1)]
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}

const setListSongIdReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_SET_SONG:
      return [...state, action.setSong.song_id]
    case DELETE_SET_SONG:
      return state.filter(songId => songId !== action.setSong.song_id)
    default:
      return state
  }
}
