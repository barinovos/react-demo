import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({ loading }) =>
  loading && (
    <div className="loader-wrapper">
      <img src="/loader.gif" alt="Loading..." />
    </div>
  )

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Loader
