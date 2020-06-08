import actionTypes from '../constants/actionTypes'

export const getTodos = () => ({ type: actionTypes.GET_TODOS_REQUEST })

export const addTodo = text => ({
  type: actionTypes.ADD_TODO_REQUEST,
  payload: {
    text,
  },
})

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
})

export const toggleAllTodo = () => ({
  type: actionTypes.TOGGLE_ALL_TODO_REQUEST,
})

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO_REQUEST,
  payload: {
    id,
  },
})

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO_REQUEST,
  payload: {
    id,
  },
})

export const deleteAllTodo = () => ({
  type: actionTypes.DELETE_ALL_TODO_REQUEST,
})

export const deleteAllCompletedTodo = () => ({
  type: actionTypes.DELETE_ALL_COMPLETED_TODO_REQUEST,
})
