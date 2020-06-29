import actionTypes from '../constants/actionTypes'

const syncBgReducer = (state = { started: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.START_BG_SYNC:
      return {
        started: true,
        progress: 1,
      }
    case actionTypes.BG_SYNC_CANCELLED:
      return {
        started: false,
        stopped: true,
      }
    case actionTypes.SET_BG_SYNC_PROGRESS:
      return {
        started: true,
        progress: payload.progress,
      }
    case actionTypes.BG_SYNC_DONE:
    case actionTypes.BG_SYNC_FAILED:
      return {
        started: false,
      }
    default:
      return state
  }
}

export default syncBgReducer
