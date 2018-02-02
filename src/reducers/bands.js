

export const bandsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_USER_DATA':
      return [...state, action.userData.bands]
    default:
      return state
  }

}
