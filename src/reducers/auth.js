
const initialState = { currentUser: {} };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, username } = action.user
      return {...state, currentUser: { id, username }}
    default:
      return state
  }
}
