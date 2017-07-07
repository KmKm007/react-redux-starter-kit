import actionTypes from '@actionTypes'

const initialState = {
  value: 0
}

function counterIncrement (state, action) {
  return {
    ...state,
    value: state.value + action.payload.value
  }
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_INCREMENT:
      return counterIncrement(state, action)
    default:
      return initialState
  }
}

export default counterReducer
