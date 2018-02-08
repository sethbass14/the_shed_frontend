import { ADD_SET_LIST, ADD_SET_SONG, DELETE_SET_SONG } from '../constants'
import setSongReducer from './setSong'

const initialState = []
export const setListReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SET_LIST:
      return [...state, action.setList]
    case ADD_SET_SONG:
      // debugger
      let setList = state.find(setList => setList.id === action.setSong.payload.set_list_id)
      let index = state.indexOf(setList)
      setList.set_songs = [...setList.set_songs, {
        id: action.setSong.payload.id,
        song_id: action.setSong.payload.song_id,
        set_list_id: action.setSong.payload.set_list_id
      }]
      return [...state.slice(0, index), setList, ...state.slice(index + 1)]
    case DELETE_SET_SONG:
      setList = state.find(setList => setList.id === action.setSong.payload.set_list_id)
      index = state.indexOf(setList)
      setList.set_songs = setList.set_songs.filter(setSong => setSong.id !== action.setSong.payload.id)
      return [...state.slice(0, index), setList, ...state.slice(index + 1)]
    default:
      return state
  }
}


// id(pin): 19
// set_list_id(pin): 1
// song_id(pin): 32

// {
//   id: action.setSong.payload.id,
//   song_id: action.setSong.payload.song_id
// }
