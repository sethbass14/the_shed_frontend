import { SET_USER_DATA, ADD_BAND, DELETE_BAND, ADD_SET_LIST } from '../constants'
import { setListReducer } from './setList';
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
    case ADD_SET_LIST:
      debugger
      let band = state.find(band => band.id === action.setList.band_id)
      let index = state.indexOf(band)
      band = {...band, set_lists: setListReducer(band.set_lists, action)}
      return [...state.slice(0, index), band, ...state.slice(index + 1)]
    default:
      return state
  }

}
