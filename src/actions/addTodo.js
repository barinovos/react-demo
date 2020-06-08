import provider from '../utils/provider'
import actionTypes from '../constants/actionTypes'
import { hideLoader, showLoader } from './loader'
import { catchError } from './handleError'

export const addTodo = text => dispatch => {
  dispatch(showLoader())
  return provider
    .getProvider()
    .addTodo(text)
    .then(todos => {
      const id = todos[todos.length - 1].id
      dispatch({
        type: actionTypes.ADD_TODO,
        payload: {
          id,
          text,
        },
      })
    })
    .catch(catchError(dispatch))
    .finally(() => dispatch(hideLoader()))
}
