import axios from 'axios'

export default ({ apiURL, apiRootRoute, routes }) => ({
  getTodos: () =>
    axios.get(apiURL + apiRootRoute + routes.todos).then(resp => resp.data),
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
      .post(`${apiURL}${apiRootRoute}${routes.sync}`)
      .then(resp => resp.data),
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
