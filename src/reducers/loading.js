import actionTypes from '../constants/actionTypes'

const loaderReducer = (state = false, { type }) => {
  /*switch (action.type) {
    case actionTypes.GET_TODOS_REQUEST:
    case actionTypes.ADD_TODO_REQUEST:
    case actionTypes.TOGGLE_TODO_REQUEST:
      ...
      return true
    case actionTypes.GET_TODOS_SUCCESS:
    case actionTypes.ERROR:
      return false
    default:
      return state
  }*/
  // do more generic
  if (type.includes('_REQUEST')) {
    return true
  }
  if (type.includes('_SUCCESS') || type === actionTypes.ERROR) {
    return false
  }
  return state
}

export default loaderReducer
