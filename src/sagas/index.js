import { all } from 'redux-saga/effects'
import { watchFetchTodos } from './getTodos'
import { watchAddTodo } from './addTodo'
import { watchToggleTodo } from './toggleTodo'
import { watchToggleAllTodo } from './toggleAllTodo'
import { watchDeleteTodo } from './deleteTodo'
import { watchDeleteAllTodo } from './deleteAllTodo'
import { watchDeleteAllCompletedTodo } from './deleteAllCompletedTodo'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddTodo(),
    watchToggleTodo(),
    watchToggleAllTodo(),
    watchDeleteTodo(),
    watchDeleteAllTodo(),
    watchDeleteAllCompletedTodo(),
  ])
}
