import actionTypes from '../constants/actionTypes'

const todos = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.GET_TODOS_SUCCESS:
      return payload
    case actionTypes.ADD_TODO_SUCCESS:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          completed: false,
        },
      ]
    case actionTypes.TOGGLE_ALL_TODO_SUCCESS:
      return state.map(todo => ({ ...todo, completed: !todo.completed }))
    case actionTypes.TOGGLE_TODO_SUCCESS:
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    case actionTypes.DELETE_TODO_SUCCESS:
      return state.filter(todo => todo.id !== payload.id)
    case actionTypes.DELETE_ALL_TODO_SUCCESS:
      return []
    case actionTypes.DELETE_ALL_COMPLETED_TODO_SUCCESS:
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

export default todos
