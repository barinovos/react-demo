import actionTypes from '../constants/actionTypes'

const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return true
    case actionTypes.LOADED:
      return false
    default:
      return state
  }
}

export default loaderReducer
