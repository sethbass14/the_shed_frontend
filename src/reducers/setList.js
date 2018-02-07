import { ADD_SET_LIST } from '../constant'

const initialState = []
export const setListReducer = (state = initialState, action  ) {
  switch(action.type) {
    case ADD_SET_LIST:
      return [...state, action.setList] 
    default:
      return state
  }
}
