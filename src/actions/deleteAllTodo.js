import provider from '../utils/provider'
import actionTypes from '../constants/actionTypes'
import { hideLoader, showLoader } from './loader'
import { catchError } from './handleError'

export const deleteAllTodo = () => dispatch => {
  dispatch(showLoader())
  return provider
    .getProvider()
    .deleteAllTodo()
    .then(() => {
      dispatch({
        type: actionTypes.DELETE_ALL_TODO,
      })
    })
    .catch(catchError(dispatch))
    .finally(() => dispatch(hideLoader()))
}
