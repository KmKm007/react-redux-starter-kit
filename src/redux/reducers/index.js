import { combineReducers } from 'redux'
import locationReducer from './location'
import counterReducer from './counter'

const reducers = combineReducers({
  location: locationReducer,
  counter: counterReducer
})

export default reducers
