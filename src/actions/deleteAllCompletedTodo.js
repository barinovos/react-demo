import provider from '../utils/provider'
import actionTypes from '../constants/actionTypes'
import { hideLoader, showLoader } from './loader'
import { catchError } from './handleError'

export const deleteAllCompletedTodo = () => dispatch => {
  dispatch(showLoader())
  return provider
    .getProvider()
    .deleteAllCompletedTodo()
    .then(() => {
      dispatch({
        type: actionTypes.DELETE_ALL_COMPLETED_TODO,
      })
    })
    .catch(catchError(dispatch))
    .finally(() => dispatch(hideLoader()))
}
