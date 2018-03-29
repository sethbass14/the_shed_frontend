import { SET_USER_DATA, ADD_BAND, DELETE_BAND, ADD_SONG, ADD_BAND_IMAGE, DELETE_SONG, LOGOUT_USER, ADD_SET_LIST, DELETE_SET_LIST } from '../constants'

const initialState = []
export const bandsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.bands]
    case ADD_BAND:
      return [...state, action.bandData]
    case DELETE_BAND:
      return state.filter(band => band.id !== action.bandData.id)
    case ADD_SONG:
    case DELETE_SONG:
      let band = state.find(band => band.id === action.songData.band_id)
      let index = state.indexOf(band)
      band.song_ids = bandSongIdsReducer(band.song_ids, action)
      return [...state.slice(0, index), band, ...state.slice(index + 1)]
    case ADD_BAND_IMAGE:
      band = state.find(band => band.id === action.bandData.id)
      index = state.indexOf(band)
      band.image = action.bandData.image
      return [...state.slice(0, index), band, ...state.slice(index + 1)]
    case ADD_SET_LIST:
    case DELETE_SET_LIST:
      debugger
      band = state.find(band => band.id === action.setList.band_id)
      index = state.indexOf(band)
      band.set_list_ids = bandSetListIdsReducer(band.set_list_ids, action)
      return [...state.slice(0, index), band, ...state.slice(index + 1)]
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}

const bandSongIdsReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_SONG:
      return [...state, action.songData.id]
    case DELETE_SONG:
      return state.filter(songId => songId !== action.songData.id)
    default:
      return state
  }
}

const bandSetListIdsReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_SET_LIST:
      return [...state, action.setList.id]
    case DELETE_SET_LIST:
      return state.filter(setListId => setListId !== action.setList.id)
    default:
      return state
  }
}
