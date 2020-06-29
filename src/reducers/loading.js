import actionTypes from '../constants/actionTypes'

let requestsCount = 0

const loaderReducer = (state = false, { type, payload }) => {
  // do more generic
  if (type.includes('_REQUEST')) {
    requestsCount++
    return true
  }
  if (
    type.includes('_SUCCESS') ||
    (type === actionTypes.ERROR && payload.show)
  ) {
    requestsCount--
    return Boolean(requestsCount)
  }
  return state
}

export default loaderReducer
