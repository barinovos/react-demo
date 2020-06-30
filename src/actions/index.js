import actionTypes from '../constants/actionTypes'

export const getTodos = () => ({ type: actionTypes.GET_TODOS_REQUEST })

export const addTodo = text => ({
  type: actionTypes.ADD_TODO_REQUEST,
  payload: {
    text,
  },
})

export const addTodoBatch = text => ({
  type: actionTypes.ADD_TODO_BATCH_REQUEST,
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

export const syncNow = () => ({
  type: actionTypes.START_SYNC,
})

export const cancelSync = () => ({
  type: actionTypes.STOP_SYNC,
})

export const syncCancelled = () => ({
  type: actionTypes.SYNC_CANCELLED,
})

export const syncSuccess = result => ({
  type: actionTypes.SYNC_FINISHED,
  payload: result,
})

export const syncBg = () => ({
  type: actionTypes.START_BG_SYNC,
})

export const syncBgCancelled = () => ({
  type: actionTypes.BG_SYNC_CANCELLED,
})

export const syncBgProgress = result => ({
  type: actionTypes.SET_BG_SYNC_PROGRESS,
  payload: result,
})

export const syncBgSuccess = result => ({
  type: actionTypes.BG_SYNC_DONE,
  payload: result,
})

export const cancelSyncBg = () => ({
  type: actionTypes.CANCEL_BG_SYNC,
})
