import actionTypes from '../constants/actionTypes'

const syncNowReducer = (state = { started: false }, { type }) => {
  switch (type) {
    case actionTypes.START_SYNC:
      return {
        started: true,
      }
    case actionTypes.SYNC_CANCELLED:
      return {
        stopped: true,
      }
    case actionTypes.SYNC_FINISHED:
    case actionTypes.SYNC_FAILED:
      return {
        started: false,
      }
    default:
      return state
  }
}

export default syncNowReducer
