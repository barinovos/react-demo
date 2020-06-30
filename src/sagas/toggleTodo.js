import { actionChannel, call, put, take } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on TOGGLE_TODO_REQUEST actions
export function* toggleTodo({ payload }) {
  yield call(provider.getProvider().toggleTodo, payload.id)
  yield put({
    type: actionTypes.TOGGLE_TODO_SUCCESS,
    payload: {
      id: payload.id,
    },
  })
}

export function* watchToggleTodo() {
  // yield takeLatest(actionTypes.TOGGLE_TODO_REQUEST, toggleTodo)
  // 1- Create a channel for request actions
  const requestChan = yield actionChannel(actionTypes.TOGGLE_TODO_REQUEST)
  while (true) {
    // 2- take from the channel
    const action = yield take(requestChan)
    // 3- Note that we're using a blocking call
    yield call(toggleTodo, action)
  }
}
