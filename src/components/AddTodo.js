import React from 'react'
import PropTypes from 'prop-types'

let input

const AddTodo = ({ addTodo }) => (
  <form
    onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      addTodo(input.value)
      input.value = ''
    }}
  >
    <input
      className="new-todo"
      ref={node => (input = node)}
      placeholder="What needs to be done?"
    />
  </form>
)

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
