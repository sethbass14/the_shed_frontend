import { songsReducer } from './songs';


const initialState = {
  'id': null,
  'username': null,
  'email': null,
  'bands': [
            {
              'name': null,
              'songs': [],
              'setlists': []
            }
          ]
}

export const userReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case 'SET_USER_DATA':
      // debugger
      return { ...action.userData, songs: songsReducer(action.userData.songs, action)  }
    case 'ADD_SONG':
      // debugger
      return {...state, songs: songsReducer(state.songs, action)}
    case 'LOGOUT_USER':
      return initialState
    default:
      return state
  }
}
