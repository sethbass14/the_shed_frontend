import { SET_USER_DATA, ADD_SET_LIST, DELETE_SET_LIST, DELETE_BAND, ADD_SET_SONG } from '../constants'

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
      let setList = state.find(setList => setList.id === action.setSong.set_list_id)
      let index = state.indexOf(setList)
      setList.song_ids = [...setList.song_ids, action.setSong.song_id]
      return [...state.slice(0, index), setList, ...state.slice(index + 1)]
    default:
      return state
  }
}
