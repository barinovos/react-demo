import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onToggle, onDelete, completed, text }) => (
  <li
    onClick={onToggle}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input className="toggle" type="checkbox" value={completed}/>
    <label>{text}</label>
    <button className="destroy" type="button" onClick={ev => {
      ev.stopPropagation()
      onDelete()
    }}/>
  </li>
)

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
