import { SET_USER_DATA, ADD_BAND, DELETE_BAND, ADD_SONG, DELETE_SONG } from '../constants'

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
