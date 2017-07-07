import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../components/counter'

class CounterContainer extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    counterIncrement: PropTypes.func.isRequired
  }

  handleClick () {
    const { counterIncrement } = this.props
    counterIncrement(1)
  }

  render () {
    return (
      <Counter
        handleClick={this.handleClick.bind(this)}
        value={this.props.value}
      />
    )
  }
}

export default CounterContainer
