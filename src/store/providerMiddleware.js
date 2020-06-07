import actionTypes from '../constants/actionTypes'
import todos from '../reducers/todos'

export const getDefaultState = () => ({
  todos: todos({}),
})

export default function providerMiddleware() {
  return next => action => {
    // get the result of provider data
    // update the local storage in there
    const state = todos(action)

    // the only goal of this middleware to add id
    // to the newly created item, that's it!
    if (action.type === actionTypes.ADD_TODO) {
      action.id = state[state.length - 1].id
    }

    return next(action)
  }
}
