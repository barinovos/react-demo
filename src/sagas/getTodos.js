import { call, put, takeLatest, fork } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'
import { handleError } from './handleError'

// worker Saga: will be fired on GET_TODOS_REQUESTED actions
export function* getTodos() {
  try {
    const todos = yield call(provider.getProvider().getTodos)
    yield put({ type: actionTypes.GET_TODOS_SUCCESS, payload: todos })
  } catch (e) {
    yield fork(handleError, e.message)
  }
}

export function* watchFetchTodos() {
  yield takeLatest(actionTypes.GET_TODOS_REQUEST, getTodos)
}
