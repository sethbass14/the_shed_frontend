import { SET_CURRENT_USER, ADD_SET_SONG } from '../constants'


const initialState = []
export const setSongsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.set_songs]
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
