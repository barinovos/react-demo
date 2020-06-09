import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import ActionsPanel from './ActionsPanel'
import { FILTER } from './App'

const Footer = ({
  count,
  filter,
  onLinkClick,
  deleteAllTodo,
  deleteAllCompletedTodo,
}) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{count} </strong>
      <span>item(s) left</span>
    </span>
    <ul className="filters">
      <Link
        filter={FILTER.SHOW_ALL}
        active={filter === FILTER.SHOW_ALL}
        onClick={() => onLinkClick(FILTER.SHOW_ALL)}
      >
        All
      </Link>
      <Link
        filter={FILTER.SHOW_ACTIVE}
        active={filter === FILTER.SHOW_ACTIVE}
        onClick={() => onLinkClick(FILTER.SHOW_ACTIVE)}
      >
        Active
      </Link>
      <Link
        filter={FILTER.SHOW_COMPLETED}
        active={filter === FILTER.SHOW_COMPLETED}
        onClick={() => onLinkClick(FILTER.SHOW_COMPLETED)}
      >
        Completed
      </Link>
    </ul>
    <ActionsPanel
      deleteAllTodo={deleteAllTodo}
      deleteAllCompletedTodo={deleteAllCompletedTodo}
    />
  </footer>
)

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  deleteAllTodo: PropTypes.func.isRequired,
  deleteAllCompletedTodo: PropTypes.func.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default Footer
