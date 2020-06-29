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
const rootRoute = `/api/${version}/${todos}`

const withTimeout = cb => (req, res) => {
  setTimeout(() => cb(req, res), Math.random() * maxDelay)
}

// Settings
app.use(cors()) // cors
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Get all items
app.get(
  rootRoute,
  withTimeout((req, res) => res.status(200).send(db.get(todos).value()))
)

// Create item
app.post(
  rootRoute,
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
    const newTodo = { id: uuid(), text: req.body.text, completed: false }
    db.get(todos)
      .push(newTodo)
      .write()
    res.status(200).send(db.get(todos).value())
  })
)

// Delete item
app.delete(
  `${rootRoute}/:id`,
  withTimeout((req, res) => {
    const id = req.params.id
    const todo = db
      .get(todos)
      .find({ id })
      .value()
    if (!todo) {
      res.status(404).send(`ToDo with id ${id} does not exist`)
    }
    db.update(todos, items => items.filter(item => item.id !== id)).write()
    res.status(200).send(db.get(todos).value())
  })
)

// Toggle item
app.put(
  `${rootRoute}/:id`,
  withTimeout((req, res) => {
    const id = req.params.id
    const todo = db
      .get(todos)
      .find({ id })
      .value()
    if (!todo) {
      res.status(404).send(`ToDo with id ${id} does not exist`)
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
  `${rootRoute}/all`,
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
  `${rootRoute}/all`,
  withTimeout((req, res) => {
    db.set(todos, []).write()
    res.status(200).send([])
  })
)

// Delete all completed items
app.delete(
  `${rootRoute}/all-completed`,
  withTimeout((req, res) => {
    db.update(todos, items => items.filter(item => !item.completed)).write()
    res.status(200).send(db.get(todos).value())
  })
)

app.listen(port, () =>
  console.log(`Todo app listening at http://localhost:${port}`)
)
