import { channel } from 'redux-saga'
import { put, take, fork, call } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import { addTodo } from './addTodo'

export function* watchAddTodoBatch() {
  // create a channel to queue incoming requests
  const chan = yield call(channel)

  // create 3 worker 'threads'
  for (var i = 0; i < 3; i++) {
    yield fork(handleRequest, chan)
  }

  while (true) {
    const action = yield take(actionTypes.ADD_TODO_BATCH_REQUEST)
    yield put(chan, action)
  }
}

function* handleRequest(chan) {
  while (true) {
    const action = yield take(chan)
    // process the request
    yield call(addTodo, action)
  }
}
