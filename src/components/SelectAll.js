import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const SelectAll = ({ onToggle }) => (
  <Fragment>
    <input id="toggle-all" className="toggle-all" type="checkbox" onChange={onToggle}/>
    <label htmlFor="toggle-all"/>
  </Fragment>
)

SelectAll.propTypes = {
  onToggle: PropTypes.func.isRequired
}

export default SelectAll
