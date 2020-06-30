import { call, put, throttle } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

export function* searchTodos(action) {
  try {
    yield put({ type: actionTypes.SEARCH_TODOS_PROGRESS })
    const todos = yield call(provider.getProvider().getTodos, action.payload)
    yield put({ type: actionTypes.SEARCH_TODOS_DONE, payload: todos })
  } catch (e) {
    yield put({ type: actionTypes.SEARCH_TODOS_FAILED })
  }
}

export function* watchSearch() {
  yield throttle(2500, actionTypes.SEARCH_TODOS, searchTodos)
}
