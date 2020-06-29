import { call, put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on ADD_TODO_REQUEST actions
export function* addTodo(action) {
  const todos = yield call(provider.getProvider().addTodo, action.payload.text)
  const id = todos[todos.length - 1].id
  yield put({
    type: actionTypes.ADD_TODO_SUCCESS,
    payload: {
      text: action.payload.text,
      id,
    },
  })
}

export function* watchAddTodo() {
  yield takeEvery(actionTypes.ADD_TODO_REQUEST, addTodo)
}
