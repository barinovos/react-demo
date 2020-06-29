import { call, fork, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'
import { handleError } from './handleError'

// worker Saga: will be fired on DELETE_TODO_SUCCESS actions
export function* deleteTodo(action) {
  try {
    yield call(provider.getProvider().deleteTodo, action.payload.id)
    yield put({
      type: actionTypes.DELETE_TODO_SUCCESS,
      payload: {
        id: action.payload.id,
      },
    })
  } catch (e) {
    yield fork(handleError, e)
  }
}

export function* watchDeleteTodo() {
  yield takeLatest(actionTypes.DELETE_TODO_REQUEST, deleteTodo)
}
