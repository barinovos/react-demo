import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ show, message }) =>
  show && <div className="error-wrapper">{message}</div>

Error.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string,
}

export default Error
