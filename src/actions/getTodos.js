import provider from '../utils/provider'
import actionTypes from '../constants/actionTypes'
import { hideLoader, showLoader } from './loader'
import { catchError } from './handleError'

export const getTodos = () => dispatch => {
  dispatch(showLoader())
  return provider
    .getProvider()
    .getTodos()
    .then(todos => {
      dispatch({
        type: actionTypes.SET_TODOS,
        payload: todos,
      })
    })
    .catch(catchError(dispatch))
    .finally(() => dispatch(hideLoader()))
}
