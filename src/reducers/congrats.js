import actionTypes from '../constants/actionTypes'

const congratsReducer = (state = false, { type }) => {
  if (type === actionTypes.SHOW_CONGRATS) {
    return true
  }
  if (type === actionTypes.HIDE_CONGRATS) {
    return false
  }
  return state
}

export default congratsReducer
