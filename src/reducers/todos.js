import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// this is NOT testable
// const dataProvider = provider.getProvider()

const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return provider.getProvider().addTodo(action.text)
    case actionTypes.TOGGLE_ALL_TODO:
      return provider.getProvider().toggleAllTodo()
    case actionTypes.TOGGLE_TODO:
      return provider.getProvider().toggleTodo(action.id)
    case actionTypes.DELETE_TODO:
      return provider.getProvider().deleteTodo(action.id)
    case actionTypes.DELETE_ALL_TODO:
      return provider.getProvider().deleteAllTodo()
    case actionTypes.DELETE_ALL_COMPLETED_TODO:
      return provider.getProvider().deleteAllCompletedTodo()
    default:
      return provider.getProvider().getTodos()
  }
}

export default todos
