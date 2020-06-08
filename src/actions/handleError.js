import actionTypes from '../constants/actionTypes'

const ERROR_TIMEOUT = 5000

export const handleError = (show, message = '') => ({
  type: actionTypes.ERROR,
  payload: {
    show,
    message,
  },
})

export const catchError = dispatch => err => {
  dispatch(handleError(true, err.message))
  setTimeout(() => {
    dispatch(handleError(false))
  }, ERROR_TIMEOUT)
}
