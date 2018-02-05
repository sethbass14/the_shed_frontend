import { SET_USER_DATA, ADD_BAND } from '../constants'
const initialState = [
                      {
                        'name': null,
                        'songs': [],
                        'setlists': []
                      }
                    ]

export const bandsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.bands]
    case ADD_BAND:
      return [...state, action.bandData]
    default:
      return state
  }

}
