import axios from 'axios'

// https://github.com/axios/axios#cancellation
const CancelToken = axios.CancelToken
const source = CancelToken.source()

export default ({ apiURL, apiRootRoute, routes }) => ({
  getTodos: (filterText = '') =>
    axios
      .get(
        `${apiURL + apiRootRoute + routes.todos}${
          filterText ? '?text=' + encodeURIComponent(filterText) : ''
        }`
      )
      .then(resp => resp.data),
  addTodo: text =>
    axios
      .post(apiURL + apiRootRoute + routes.todos, { text })
      .then(resp => resp.data),
  toggleTodo: id =>
    axios
      .put(`${apiURL}${apiRootRoute}${routes.todos}/${id}`)
      .then(resp => resp.data),
  toggleAllTodo: () =>
    axios
      .put(`${apiURL}${apiRootRoute}${routes.todosAll}`)
      .then(resp => resp.data),
  deleteTodo: id =>
    axios
      .delete(`${apiURL}${apiRootRoute}${routes.todos}/${id}`)
      .then(resp => resp.data),
  deleteAllTodo: text =>
    axios
      .delete(`${apiURL}${apiRootRoute}${routes.todosAll}`)
      .then(resp => resp.data),
  deleteAllCompletedTodo: () =>
    axios
      .delete(`${apiURL}${apiRootRoute}${routes.todosAllCompleted}`)
      .then(resp => resp.data),
  syncNow: () =>
    axios
      .post(`${apiURL}${apiRootRoute}${routes.sync}`, null, {
        cancelToken: source.token,
      })
      .then(resp => resp.data),
  // cancel request method
  cancelSyncNow: () => source.cancel('it was cancelled'),
  // Background sync task
  startSyncTask: () =>
    axios
      .post(`${apiURL}${apiRootRoute}${routes.syncTask}`)
      .then(resp => resp.data),
  getSyncTaskStatus: () =>
    axios
      .get(`${apiURL}${apiRootRoute}${routes.syncTask}`)
      .then(resp => resp.data),
  stopTaskStatus: () =>
    axios
      .delete(`${apiURL}${apiRootRoute}${routes.syncTask}`)
      .then(resp => resp.data),
})
