const initialState = null

export const activeBandIdReducer = (state = initialState, action) => {
  switch(action.type) {
    case "CHANGE_ACTIVE_BAND_ID":
      return action.id
    case "LOGOUT_USER":
      return initialState
    default:
      return state
  }
}
