const initialState = []


export const songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USER_DATA':
      // debugger
      return [...action.userData.songs ]
    case 'ADD_SONG':
      debugger
      return [...state, action.songData]
    default:
      return state
  }
}
