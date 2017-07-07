import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ handleClick, value }) => {
  return (
    <div>
      <p>{value}</p>
      <p>
        <button onClick={handleClick}>加1</button>
      </p>
    </div>
  )
}

Counter.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Counter
