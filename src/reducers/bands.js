import { SET_USER_DATA, ADD_BAND, DELETE_BAND } from '../constants'
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
    case DELETE_BAND:
      return state.filter(band => band.id !== action.resp.band_id)
    default:
      return state
  }

}
