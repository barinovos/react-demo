import { take, put, call, race, cancelled } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import { syncCancelled, syncSuccess } from '../actions'
import provider from '../utils/provider'

function* sync() {
  try {
    const result = yield call(provider.getProvider().syncNow)
    yield put(syncSuccess(result))
  } catch (e) {
    yield put({ type: actionTypes.SYNC_FAILED })
  } finally {
    if (yield cancelled()) {
      yield call(provider.getProvider().cancelSyncNow)
      yield put(syncCancelled())
    }
  }
}

export function* syncNowSaga() {
  while (true) {
    yield take(actionTypes.START_SYNC)
    yield race({
      task: call(sync),
      cancel: take(actionTypes.STOP_SYNC),
    })
  }
}
