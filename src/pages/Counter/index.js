import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CounterContainer from './containers/counter-container'
import { mapStateToProps, mapDispatchToProps } from './store'

class CounterPage extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    counterIncrement: PropTypes.func.isRequired
  }
  render () {
    return (
      <CounterContainer {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage)
