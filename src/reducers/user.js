import { SET_USER_DATA, LOGOUT_USER, ADD_USER_IMAGE } from '../constants'

//I think I can refactor this initial state
const initialState = {
  // id: null,
  username: null,
  email: null,
}

export const userReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        // id: action.userData.id,
        username: action.userData.username,
        email: action.userData.email,
        avatar: action.userData.avatar
      }
    case ADD_USER_IMAGE:
      return {...state, avatar: action.userData.avatar}
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
