import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on TOGGLE_ALL_TODO_REQUEST actions
export function* toggleAllTodo() {
  yield call(provider.getProvider().toggleAllTodo)
  yield put({
    type: actionTypes.TOGGLE_ALL_TODO_SUCCESS,
  })
}

export function* watchToggleAllTodo() {
  yield takeLatest(actionTypes.TOGGLE_ALL_TODO_REQUEST, toggleAllTodo)
}
