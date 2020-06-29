import { call, fork, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'
import { handleError } from './handleError'

// worker Saga: will be fired on DELETE_ALL_TODO_REQUEST actions
export function* deleteAllTodo() {
  try {
    yield call(provider.getProvider().deleteAllTodo)
    yield put({
      type: actionTypes.DELETE_ALL_TODO_SUCCESS,
    })
  } catch (e) {
    yield fork(handleError, e)
  }
}

export function* watchDeleteAllTodo() {
  yield takeLatest(actionTypes.DELETE_ALL_TODO_REQUEST, deleteAllTodo)
}
