import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on DELETE_ALL_TODO_REQUEST actions
export function* deleteAllTodo() {
  yield call(provider.getProvider().deleteAllTodo)
  yield put({
    type: actionTypes.DELETE_ALL_TODO_SUCCESS,
  })
}

export function* watchDeleteAllTodo() {
  yield takeLatest(actionTypes.DELETE_ALL_TODO_REQUEST, deleteAllTodo)
}
