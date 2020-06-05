import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import SelectAll from './SelectAll'

const TodoList = ({ todos, toggleAllTodo, toggleTodo, deleteTodo }) => (
  <Fragment>
    {!!todos.length && <SelectAll onToggle={toggleAllTodo} />}
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onToggle={() => toggleTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      ))}
    </ul>
  </Fragment>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleAllTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoList
