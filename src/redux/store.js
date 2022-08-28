import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import {persistStore,persistReducer} from 'redux-persist'
import rootReducer from './rootReducer'

const persistConfig={
  key:"persist-key",
  storage
}
const persistreducer=persistReducer(persistConfig,rootReducer)

const store = createStore(
  persistreducer,
  // composeWithDevTools(applyMiddleware(logger, thunk))
    composeWithDevTools(applyMiddleware( thunk))

)
const persistor=persistStore(store)

export default store
export {persistor}
