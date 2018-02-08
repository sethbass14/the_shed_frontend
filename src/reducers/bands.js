import { SET_USER_DATA, ADD_BAND, DELETE_BAND, ADD_SET_LIST, ADD_SONG, DELETE_SONG, ADD_SET_SONG } from '../constants'
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
    case ADD_SONG:
      debugger
      let band = state.find(band => band.id === action.songData.band_id)
      let index = state.indexOf(band)
      band = {...band, songs: [...band.songs, action.songData] }
      return [ ...state.slice(0, index), band, ...state.slice(index + 1)]
    case DELETE_SONG:
      band = state.find(band => band.id === action.resp.band_id)
      index = state.indexOf(band)
      band = {...band, songs: band.songs.filter(song => song.id !== action.resp.id)}
      return [...state.slice(0, index), band, ...state.slice(index + 1)]
    case ADD_SET_LIST:
      // debugger
      band = state.find(band => band.id === action.setList.band_id)
      index = state.indexOf(band)
      band = {...band, set_lists: setListReducer(band.set_lists, action)}
      return [...state.slice(0, index), band, ...state.slice(index + 1)]
    case ADD_SET_SONG:
      debugger
      band = state.find(band => band.id === action.setSong.band_id)
      index = state.indexOf(band)
      band = {...band, set_lists: setListReducer(band.set_lists, action)}
      return [...state.slice(0, index), band, ...state.slice(index + 1)]
    default:
      return state
  }

}
