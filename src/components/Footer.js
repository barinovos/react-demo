import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import ActionsPanel from '../containers/ActionsPanel'
import VisibilityFilters from '../constants/visibilityFilters'

const Footer = ({ count }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{count} </strong>
      <span>item(s) left</span>
    </span>
    <ul className="filters">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </ul>
    <ActionsPanel />
  </footer>
)

Footer.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Footer
