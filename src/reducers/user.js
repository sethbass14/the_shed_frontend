import { bandsReducer } from './bands'

export const userReducer = ( state = {}, action ) => {
  switch(action.type) {
    case 'SET_USER_DATA':
      // return {...state, userData: {...action.userData, bands: bandsReducer(action.userData.bands, action)}}
      return {...state, userData: action.userData }
    default:
      return state
  }
}
