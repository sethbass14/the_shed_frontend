import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { userReducer } from './user'
import { activeBandIdReducer } from './activeBandIdReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  userData : userReducer,
  activeBandId: activeBandIdReducer
})

// export default rootReducer
