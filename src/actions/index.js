import actionTypes from '../constants/actionTypes'

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  text,
})

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter,
})

export const toggleAllTodo = () => ({
  type: actionTypes.TOGGLE_ALL_TODO,
})

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id,
})

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  id,
})

export const deleteAllTodo = () => ({
  type: actionTypes.DELETE_ALL_TODO,
})

export const deleteAllCompletedTodo = () => ({
  type: actionTypes.DELETE_ALL_COMPLETED_TODO,
})
