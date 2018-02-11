import { SET_USER_DATA, ADD_SET_LIST, DELETE_SET_LIST, DELETE_BAND } from '../constants'

const initialState = []
export const setListReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.set_lists]
    case DELETE_BAND:
      return state.filter(setList => setList.band_id !== action.bandData.id)
    case ADD_SET_LIST:
      return [...state, action.setList]
    case DELETE_SET_LIST:
      return state.filter(setList => setList.id !== action.setList.id)
    default:
      return state
  }
}
