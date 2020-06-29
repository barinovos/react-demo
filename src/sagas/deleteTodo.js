import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on DELETE_TODO_SUCCESS actions
export function* deleteTodo(action) {
  yield call(provider.getProvider().deleteTodo, action.payload.id)
  yield put({
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload: {
      id: action.payload.id,
    },
  })
}

export function* watchDeleteTodo() {
  yield takeLatest(actionTypes.DELETE_TODO_REQUEST, deleteTodo)
}
