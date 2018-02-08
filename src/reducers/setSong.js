import { ADD_SET_SONG } from '../constants'

export const setSongReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_SET_SONG:
      return [...state, action.setSong]
    default:
      return state
  }
}
