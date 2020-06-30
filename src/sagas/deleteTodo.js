import { actionChannel, call, put, take } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on DELETE_TODO_SUCCESS actions
export function* deleteTodo({ payload }) {
  yield call(provider.getProvider().deleteTodo, payload.id)
  yield put({
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload: {
      id: payload.id,
    },
  })
}

export function* watchDeleteTodo() {
  // yield takeLatest(actionTypes.DELETE_TODO_REQUEST, deleteTodo)
  // 1- Create a channel for request actions
  const requestChan = yield actionChannel(actionTypes.DELETE_TODO_REQUEST)
  while (true) {
    // 2- take from the channel
    const action = yield take(requestChan)
    // 3- Note that we're using a blocking call
    yield call(deleteTodo, action)
  }
}
