import provider from '../utils/provider'
import actionTypes from '../constants/actionTypes'
import { hideLoader, showLoader } from './loader'
import { catchError } from './handleError'

export const toggleAllTodo = () => dispatch => {
  dispatch(showLoader())
  return provider
    .getProvider()
    .toggleAllTodo()
    .then(() => {
      dispatch({
        type: actionTypes.TOGGLE_ALL_TODO,
      })
    })
    .catch(catchError(dispatch))
    .finally(() => dispatch(hideLoader()))
}
