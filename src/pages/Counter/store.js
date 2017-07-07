import actions from '@actions'

const mapStateToProps = state => ({
  value: state.counter.value
})

const mapDispatchToProps = dispatch => ({
  counterIncrement (value) {
    dispatch(actions.counterIncrement(value))
  }
})

export {
  mapStateToProps,
  mapDispatchToProps
}
