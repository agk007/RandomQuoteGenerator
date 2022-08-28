import { combineReducers } from 'redux'
import bookmarkReducer from './bookmark/bookmarkReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
  user: userReducer
})

export default rootReducer
