import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on GET_TODOS_REQUESTED actions
export function* getTodos() {
  const todos = yield call(provider.getProvider().getTodos)
  yield put({ type: actionTypes.GET_TODOS_SUCCESS, payload: todos })
}

export function* watchFetchTodos() {
  yield takeLatest(actionTypes.GET_TODOS_REQUEST, getTodos)
}
