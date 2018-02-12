import { SET_USER_DATA, ADD_SONG, DELETE_SONG, ADD_SONG_NOTES, DELETE_BAND, ADD_SET_SONG, DELETE_SET_SONG, ADD_VIDEO_URL } from '../constants'


const initialState = []
export const songsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return [...action.userData.songs]
    case ADD_SONG:
      return [...state, action.songData]
    case DELETE_SONG:
      return state.filter(song => song.id !== action.songData.id)
    case ADD_SONG_NOTES:
      let song = state.find(song => song.id === action.songData.id)
      let index = state.indexOf(song)
      song.notes = action.songData.notes
      return [...state.slice(0, index), song, ...state.slice(index + 1)]
    case DELETE_BAND:
      return state.filter(song => song.band_id !== action.bandData.id)
    case ADD_SET_SONG:
    case DELETE_SET_SONG:
      song = state.find(song => song.id === action.setSong.song_id)
      index = state.indexOf(song)
      song.set_list_ids = songSetListIdReducer(song.set_list_ids, action)
      return [...state.slice(0, index), song, ...state.slice(index + 1)]
    case ADD_VIDEO_URL:

      song = state.find(song => song.id === action.songData.id)
      index = state.indexOf(song)
      song.you_tube_url = action.songData.you_tube_url
      return [...state.slice(0, index), song, ...state.slice(index + 1)]
    default:
      return state
  }
}

const songSetListIdReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_SET_SONG:
      return [...state, action.setSong.set_list_id]
    case DELETE_SET_SONG:
      return state.filter(setListId => setListId !== action.setSong.set_list_id)
    default:
      return state
  }
}
