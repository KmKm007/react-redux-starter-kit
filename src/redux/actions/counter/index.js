import actionTypes from '@actionTypes'

export function counterIncrement (value) {
  return {
    type: actionTypes.COUNTER_INCREMENT,
    payload: {
      value
    }
  }
}
