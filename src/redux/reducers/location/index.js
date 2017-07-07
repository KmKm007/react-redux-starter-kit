import actionTypes from '@actionTypes'
import { HistoryUtil } from 'kmkm-utils'

const history = HistoryUtil.getHistory()

const initialState = history.location

function locationChange (state, action) {
  return action.location
}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOCATION_CHANGE:
      return locationChange(state, action)
    default:
      return state
  }
}

export default locationReducer
