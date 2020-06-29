import { put, delay } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'

export function* handleError(e) {
  const message = (e && e.response && e.response.data) || e.message
  yield put({
    type: actionTypes.ERROR,
    payload: { show: true, message },
  })
  yield delay(5000)
  yield put({
    type: actionTypes.ERROR,
    payload: { show: false },
  })
}
