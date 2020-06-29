import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ message }) => <div className="error-wrapper">{message}</div>

Error.propTypes = {
  message: PropTypes.string,
}

export default Error
