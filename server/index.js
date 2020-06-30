// Express init
const express = require('express')
const app = express()
const cors = require('cors')
// DB adapter
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
// uuid
const { v4: uuid } = require('uuid')
// const
const port = 9000
const maxDelay = 3000
const maxTextLength = 20
const version = 'v1'
const todos = 'todos'
const rootRoute = `/api/${version}`
const todoRoute = `/api/${version}/${todos}`

const withTimeout = (cb, timeout) => (req, res) => {
  setTimeout(() => cb(req, res), timeout || Math.random() * maxDelay)
}

// Settings
app.use(cors()) // cors
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Get all items
app.get(
  todoRoute,
  withTimeout((req, res) => {
    const search = req.query && req.query.text
    const result = db
      .get(todos)
      .sortBy('createdAt')
      .value()
    res
      .status(200)
      .send(
        search
          ? result.filter(t =>
              t.text.toLowerCase().includes(search.toLowerCase())
            )
          : result
      )
  })
)

// Create item
app.post(
  todoRoute,
  withTimeout((req, res) => {
    const text = req.body.text
    if (!text) {
      return res.status(409).send(`Text is required`)
    }
    if (text.length > maxTextLength) {
      return res
        .status(409)
        .send(`Text exceeds the max length of ${maxTextLength} symbols!`)
    }
    const todo = db
      .get(todos)
      .find({ text })
      .value()
    if (todo) {
      return res.status(409).send(`ToDo ${text} already exists`)
    }
    const newTodo = {
      id: uuid(),
      text: req.body.text,
      completed: false,
      createdAt: Date.now(),
    }
    db.get(todos)
      .push(newTodo)
      .write()
    res.status(200).send(db.get(todos).value())
  })
)

// Delete item
app.delete(
  `${todoRoute}/:id`,
  withTimeout((req, res) => {
    const id = req.params.id
    const todo = db
      .get(todos)
      .find({ id })
      .value()
    if (!todo) {
      return res.status(404).send(`ToDo with id ${id} does not exist`)
    }
    db.update(todos, items => items.filter(item => item.id !== id)).write()
    res.status(200).send(db.get(todos).value())
  })
)

// Toggle item
app.put(
  `${todoRoute}/:id`,
  withTimeout((req, res) => {
    const id = req.params.id
    const todo = db
      .get(todos)
      .find({ id })
      .value()
    if (!todo) {
      return res.status(404).send(`ToDo with id ${id} does not exist`)
    }
    db.update(todos, items =>
      items.map(item =>
        item.id !== id
          ? item
          : {
              ...item,
              completed: !item.completed,
            }
      )
    ).write()
    res.status(200).send(db.get(todos).value())
  })
)

// Toggle all items
app.put(
  `${todoRoute}-all`,
  withTimeout((req, res) => {
    const todos = db.get(todos).value()
    const isAllCompleted = todos.every(t => t.completed)
    db.set(
      todos,
      todos.map(t => ({ ...t, completed: !isAllCompleted }))
    ).write()
    res.status(200).send(db.get(todos).value())
  })
)

// Delete all items
app.delete(
  `${todoRoute}-all`,
  withTimeout((req, res) => {
    db.set(todos, []).write()
    res.status(200).send([])
  })
)

// Delete all completed items
app.delete(
  `${todoRoute}-all-completed`,
  withTimeout((req, res) => {
    db.update(todos, items => items.filter(item => !item.completed)).write()
    res.status(200).send(db.get(todos).value())
  })
)

const TIMEOUT_SMALL = 10000
const TIMEOUT_BIG = 30000

app.post(
  `${rootRoute}/sync`,
  withTimeout((req, res) => {
    res.status(200).send('OK')
  }, TIMEOUT_SMALL)
)

const syncTask = {
  progress: 0,
  startedAt: null,
}

const runTask = () => {
  syncTask.startedAt = Date.now()
  setTimeout(() => {
    syncTask.startedAt = null
    syncTask.progress = 0
  }, TIMEOUT_BIG)
}

app.post(
  `${rootRoute}/sync-task`,
  withTimeout((req, res) => {
    if (syncTask.startedAt) {
      return res.status(400).send('Sync task is already in progress!')
    }
    runTask()
    res.status(200).send('Started')
  }, 10)
)

app.get(
  `${rootRoute}/sync-task`,
  withTimeout((req, res) => {
    if (syncTask.startedAt) {
      const now = Date.now()
      syncTask.progress = Math.floor(
        ((now - syncTask.startedAt) / TIMEOUT_BIG) * 100
      )
    }
    res.status(200).send(syncTask)
  }, 10)
)

app.delete(
  `${rootRoute}/sync-task`,
  withTimeout((req, res) => {
    // no error here, just clean it in any reason
    syncTask.startedAt = null
    syncTask.progress = 0
    res.status(200).send(syncTask)
  }, 10)
)

app.listen(port, () =>
  console.log(`Todo app listening at http://localhost:${port}`)
)
