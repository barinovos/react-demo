import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onToggle, onDelete, completed, text }) => (
  <li className={completed ? 'completed' : ''}>
    <input
      className="toggle"
      type="checkbox"
      checked={completed}
      onChange={onToggle}
      onClick={ev => ev.stopPropagation()}
    />
    <label>{text}</label>
    <button className="destroy" type="button" onClick={onDelete} />
  </li>
)

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
