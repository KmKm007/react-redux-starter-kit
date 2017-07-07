import actionTypes from '@actionTypes'

export function locationChange (location = '/') {
  return {
    type: actionTypes.LOCATION_CHANGE,
    payload: {
      location
    }
  }
}
