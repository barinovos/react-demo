import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on TOGGLE_TODO_REQUEST actions
export function* toggleTodo(action) {
  yield call(provider.getProvider().toggleTodo, action.payload.id)
  yield put({
    type: actionTypes.TOGGLE_TODO_SUCCESS,
    payload: {
      id: action.payload.id,
    },
  })
}

export function* watchToggleTodo() {
  yield takeLatest(actionTypes.TOGGLE_TODO_REQUEST, toggleTodo)
}
