import provider from '../utils/provider'
import actionTypes from '../constants/actionTypes'
import { hideLoader, showLoader } from './loader'
import { catchError } from './handleError'

export const toggleTodo = id => dispatch => {
  dispatch(showLoader())
  return provider
    .getProvider()
    .toggleTodo(id)
    .then(() => {
      dispatch({
        type: actionTypes.TOGGLE_TODO,
        payload: id,
      })
    })
    .catch(catchError(dispatch))
    .finally(() => dispatch(hideLoader()))
}
