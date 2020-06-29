import { take, put, delay } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'

const TODOS_TO_CONGRATS = 3

export function* watchDailyTarget() {
  for (let i = 0; i < TODOS_TO_CONGRATS; i++) {
    yield take(actionTypes.ADD_TODO_SUCCESS)
  }
  yield put({ type: actionTypes.SHOW_CONGRATS })
  yield delay(5000)
  yield put({ type: actionTypes.HIDE_CONGRATS })
}
