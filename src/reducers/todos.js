import actionTypes from '../constants/actionTypes'

const todos = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.SET_TODOS:
      return payload
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          completed: false,
        },
      ]
    case actionTypes.TOGGLE_ALL_TODO:
      return state.map(todo => ({ ...todo, completed: !todo.completed }))
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      )
    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== payload)
    case actionTypes.DELETE_ALL_TODO:
      return []
    case actionTypes.DELETE_ALL_COMPLETED_TODO:
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

export default todos
