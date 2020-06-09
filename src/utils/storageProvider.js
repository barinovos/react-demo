import { Promise } from 'bluebird'
import { v4 as uuid4 } from 'uuid'

const config = {
  storage: localStorage,
  asyncTimeout: 1000,
}

const setSessionStorage = () => (config.storage = sessionStorage)

const setLocalStorage = () => (config.storage = localStorage)

const getData = () =>
  JSON.parse(config.storage.getItem(config.storageKey)) || {}

const setData = data =>
  data &&
  config.storage.setItem(
    config.storageKey,
    JSON.stringify({
      ...getData(),
      ...data,
    })
  )

const getTodos = () => getData().todos || []

const validateText = text => {
  if (typeof text !== 'string') {
    throw new Error('Text is not a string!')
  }
  if (!text) {
    throw new Error('TODO text is required!')
  }
  if (text.length > config.maxTextLength) {
    throw new Error(
      `Text exceeds the max length of ${config.maxTextLength} symbols!`
    )
  }
}

const validateId = id => {
  if (typeof id !== 'string') {
    throw new Error('Id is not a string!')
  }
  if (!id) {
    throw new Error('Id is required!')
  }
}

const syncStorageProvider = {
  getTodos,
  addTodo: text => {
    validateText(text)
    const id = uuid4()
    const todos = getTodos()
    // check for duplication
    if (todos.find(t => t.text === text)) {
      throw new Error('This Todo already exists!')
    }
    const newTodo = { id, text, completed: false }
    const newTodos = todos.concat(newTodo)
    setData({
      todos: newTodos,
    })
    return newTodos
  },
  toggleTodo: id => {
    validateId(id)
    const todos = getTodos()
    const todo = todos.find(t => t.id === id)
    if (!todo) throw new Error(`ToDo with id ${id} does not exist`)
    const newTodos = todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
    setData({
      todos: newTodos,
    })
    return newTodos
  },
  toggleAllTodo: () => {
    const todos = getTodos()
    const isAllCompleted = todos.every(t => t.completed)
    const newTodos = todos.map(t => ({ ...t, completed: !isAllCompleted }))
    setData({
      todos: newTodos,
    })
    return newTodos
  },
  deleteTodo: id => {
    validateId(id)
    const todos = getTodos()
    const todo = todos.find(t => t.id === id)
    if (!todo) throw new Error(`ToDo with id ${id} does not exist`)
    const newTodos = todos.filter(t => t.id !== id)
    setData({
      todos: newTodos,
    })
    return newTodos
  },
  deleteAllTodo: () => {
    setData({
      todos: [],
    })
    return []
  },
  deleteAllCompletedTodo: () => {
    const todos = getTodos()
    const newTodos = todos.filter(t => !t.completed)
    setData({
      todos: newTodos,
    })
    return newTodos
  },
  setSessionStorage,
  setLocalStorage,
}

const asyncStorageProvider = Object.keys(syncStorageProvider).reduce(
  (provider, key) => {
    provider[key] = (...params) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            const response = syncStorageProvider[key](...params)
            resolve(response)
          } catch (e) {
            reject(e)
          }
        }, config.asyncTimeout)
      })
    return provider
  },
  {}
)

const getStorageProvider = ({
  maxTextLength,
  storageKey,
  isAsyncLocalStorage,
}) => {
  config.maxTextLength = maxTextLength
  config.storageKey = storageKey

  return isAsyncLocalStorage ? asyncStorageProvider : syncStorageProvider
}

export default getStorageProvider
