// import { bandsReducer } from './bands';


const initialState = {
  'id': null,
  'username': null,
  'email': null,
  'songs': [],
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
      return { ...action.userData }
    case 'LOGOUT_USER':
      return initialState
    default:
      return state
  }
}
