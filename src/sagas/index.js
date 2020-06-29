import { call, all, spawn } from 'redux-saga/effects'
import { watchFetchTodos } from './getTodos'
import { watchAddTodo } from './addTodo'
import { watchToggleTodo } from './toggleTodo'
import { watchToggleAllTodo } from './toggleAllTodo'
import { watchDeleteTodo } from './deleteTodo'
import { watchDeleteAllTodo } from './deleteAllTodo'
import { watchDeleteAllCompletedTodo } from './deleteAllCompletedTodo'
import { handleError } from './handleError'
import { watchDailyTarget } from './congrats'
import { syncNowSaga } from './syncNow'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
// https://redux-saga.js.org/docs/advanced/RootSaga.html
export default function* rootSaga() {
  const sagas = [
    watchFetchTodos,
    watchAddTodo,
    watchToggleTodo,
    watchToggleAllTodo,
    watchDeleteTodo,
    watchDeleteAllTodo,
    watchDeleteAllCompletedTodo,
    watchDailyTarget,
    syncNowSaga,
  ]

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            yield spawn(handleError, e)
          }
        }
      })
    )
  )
}
