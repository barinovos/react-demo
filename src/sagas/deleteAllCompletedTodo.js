import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on DELETE_ALL_COMPLETED_TODO_REQUEST actions
export function* deleteAllCompletedTodo() {
  yield call(provider.getProvider().deleteAllCompletedTodo)
  yield put({
    type: actionTypes.DELETE_ALL_COMPLETED_TODO_SUCCESS,
  })
}

export function* watchDeleteAllCompletedTodo() {
  yield takeLatest(
    actionTypes.DELETE_ALL_COMPLETED_TODO_REQUEST,
    deleteAllCompletedTodo
  )
}
