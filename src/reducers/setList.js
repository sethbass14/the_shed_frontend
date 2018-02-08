import { ADD_SET_LIST, ADD_SET_SONG } from '../constants'
import setSongReducer from './setSong'

const initialState = []
export const setListReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SET_LIST:
      return [...state, action.setList]
    case ADD_SET_SONG:
      // let setList = state.find(setList => setList.id === action.setSong.set_list_id)
      // let index = state.indexOf(setList)
      // setList.set_songs = [...setList.set_songs, action.setSong]
      // return [...state, set_songs: setSongReducer(state, action) ]
    default:
      return state
  }
}
