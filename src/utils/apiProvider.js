import axios from 'axios'

export default ({ apiURL, apiRootRoute }) => ({
  getTodos: () => axios.get(apiURL + apiRootRoute).then(resp => resp.data),
  addTodo: text =>
    axios.post(apiURL + apiRootRoute, { text }).then(resp => resp.data),
  toggleTodo: id =>
    axios.put(`${apiURL}${apiRootRoute}/${id}`).then(resp => resp.data),
  toggleAllTodo: () =>
    axios.put(`${apiURL}${apiRootRoute}/all`).then(resp => resp.data),
  deleteTodo: id =>
    axios.delete(`${apiURL}${apiRootRoute}/${id}`).then(resp => resp.data),
  deleteAllTodo: text =>
    axios.delete(`${apiURL}${apiRootRoute}/all`).then(resp => resp.data),
  deleteAllCompletedTodo: () =>
    axios
      .delete(`${apiURL}${apiRootRoute}/all-completed`)
      .then(resp => resp.data),
})
