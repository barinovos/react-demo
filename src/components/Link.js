import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <li style={{ marginLeft: '4px' }}>
      <a href="/#" onClick={onClick} className={ active ? 'selected' : '' }>{children}</a>
    </li>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
