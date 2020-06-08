import { call, fork, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'
import { handleError } from './handleError'

// worker Saga: will be fired on ADD_TODO_REQUEST actions
export function* addTodo(action) {
  try {
    const todos = yield call(
      provider.getProvider().addTodo,
      action.payload.text
    )
    const id = todos[todos.length - 1].id
    yield put({
      type: actionTypes.ADD_TODO_SUCCESS,
      payload: {
        text: action.payload.text,
        id,
      },
    })
  } catch (e) {
    yield fork(handleError, e.message)
  }
}

export function* watchAddTodo() {
  yield takeLatest(actionTypes.ADD_TODO_REQUEST, addTodo)
}
