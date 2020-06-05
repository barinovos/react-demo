import React from 'react'
import PropTypes from 'prop-types'

const ActionsPanel = ({ deleteAllTodo, deleteAllCompletedTodo }) => {
  return (
    <div className="actions-panel">
      <span onClick={deleteAllCompletedTodo}>Delete All Completed</span>
      <span onClick={deleteAllTodo}>Delete All</span>
    </div>
  )
}

ActionsPanel.propTypes = {
  deleteAllTodo: PropTypes.func.isRequired,
  deleteAllCompletedTodo: PropTypes.func.isRequired,
}

export default ActionsPanel
