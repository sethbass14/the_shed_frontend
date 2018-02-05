import { SET_USER_DATA } from '../constants'
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
    default:
      return state
  }

}
