import provider from '../utils/provider'
import actionTypes from '../constants/actionTypes'
import { hideLoader, showLoader } from './loader'
import { catchError } from './handleError'

export const deleteTodo = id => dispatch => {
  dispatch(showLoader())
  return provider
    .getProvider()
    .deleteTodo(id)
    .then(() => {
      dispatch({
        type: actionTypes.SET_TODOS,
        payload: id,
      })
    })
    .catch(catchError(dispatch))
    .finally(() => dispatch(hideLoader()))
}
