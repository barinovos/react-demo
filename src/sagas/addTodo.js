import { call, put, actionChannel, take } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import provider from '../utils/provider'

// worker Saga: will be fired on ADD_TODO_REQUEST actions
export function* addTodo({ payload }) {
  const todos = yield call(provider.getProvider().addTodo, payload.text)
  const id = todos[todos.length - 1].id
  yield put({
    type: actionTypes.ADD_TODO_SUCCESS,
    payload: {
      text: payload.text,
      id,
    },
  })
}

export function* watchAddTodo() {
  // yield takeEvery(actionTypes.ADD_TODO_REQUEST, addTodo)
  // 1- Create a channel for request actions
  const requestChan = yield actionChannel(actionTypes.ADD_TODO_REQUEST)
  while (true) {
    // 2- take from the channel
    const action = yield take(requestChan)
    // 3- Note that we're using a blocking call
    yield call(addTodo, action)
  }
}
