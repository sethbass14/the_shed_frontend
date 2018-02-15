import { YOU_TUBE_LOADING } from '../constants'

export const youTubeLoading = (state = false, action) => {
  switch(action.type) {
    case YOU_TUBE_LOADING:
      return !state
    default:
      return state
  }
}
