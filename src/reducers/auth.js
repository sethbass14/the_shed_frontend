import { SET_CURRENT_USER, LOGOUT_USER } from '../constants'
const initialState = { currentUser: {} };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { username } = action.user
      return { currentUser: { username } }
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
