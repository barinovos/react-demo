import {
  take,
  takeLatest,
  put,
  call,
  fork,
  cancel,
  cancelled,
  delay,
} from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'
import { syncBgCancelled, syncBgSuccess, syncBgProgress } from '../actions'
import provider from '../utils/provider'

function* sync() {
  try {
    yield call(provider.getProvider().startSyncTask)
    while (true) {
      yield delay(1000)
      const status = yield call(provider.getProvider().getSyncTaskStatus)
      if (status && !status.startedAt) {
        yield put(syncBgSuccess())
        break
      } else {
        yield put(syncBgProgress(status))
      }
    }
  } catch (e) {
    yield put({ type: actionTypes.SYNC_FAILED })
  } finally {
    if (yield cancelled()) {
      yield call(provider.getProvider().stopTaskStatus)
      yield put(syncBgCancelled())
    }
  }
}

function* syncWithCancel() {
  // starts the task in the background
  const bgSyncTask = yield fork(sync)

  // wait for the user stop action
  yield take(actionTypes.CANCEL_BG_SYNC)
  // user clicked stop. cancel the background task
  // this will cause the forked bgSync task to jump into its finally block
  yield cancel(bgSyncTask)
}

export function* syncBgSaga() {
  yield takeLatest(actionTypes.START_BG_SYNC, syncWithCancel)
}
