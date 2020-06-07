import actionTypes from '../constants/actionTypes'

const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case actionTypes.TOGGLE_ALL_TODO:
      return state.map(todo => ({ ...todo, completed: !todo.completed }))
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case actionTypes.DELETE_ALL_TODO:
      return []
    case actionTypes.DELETE_ALL_COMPLETED_TODO:
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

export default todos
