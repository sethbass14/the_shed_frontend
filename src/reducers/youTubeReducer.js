import { YOU_TUBE_LOADING, YOU_TUBE_FETCHED, VIDEO_CLICK, LOGOUT_USER } from '../constants'


const initialState = {
  videos: [],
  currentVideo: null,
  youTubeLoading: false
}

export const youTubeReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case YOU_TUBE_LOADING:
      return { ...initialState, youTubeLoading: !state.youTubeloading }
    case YOU_TUBE_FETCHED:
      if (action.resp.items.length) {
        return { videos: action.resp.items.splice(1), currentVideo: action.resp.items[0], youTubeLoading: !state.youTubeLoading }
      } else {
        return { ...state, youTubeLoading: !state.youTubeLoading }
      }
    case VIDEO_CLICK:
      const index = state.videos.indexOf(action.video)
      const newVideos = [...state.videos.slice(0, index), ...state.videos.slice(index + 1), state.currentVideo]
      return {...state, videos: newVideos, currentVideo: action.video}
    case LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
