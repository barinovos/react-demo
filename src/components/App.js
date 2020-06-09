import React, { Fragment, Component } from 'react'
import keyMirror from 'keymirror'
import { v4 as uuid } from 'uuid'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'
import Logo from './Logo'

export const FILTER = keyMirror({
  SHOW_ALL: null,
  SHOW_COMPLETED: null,
  SHOW_ACTIVE: null,
})

export default class App extends Component {
  state = {
    todos: [],
    filter: FILTER.SHOW_ALL,
  }

  getVisibleTodos = () => {
    const { todos, filter } = this.state

    switch (filter) {
      case FILTER.SHOW_ALL:
        return todos
      case FILTER.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case FILTER.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

  deleteTodo = id => {
    this.setState(prev => ({
      todos: prev.todos.filter(t => t.id !== id),
    }))
  }

  deleteAllTodo = () => {
    this.setState({ todos: [] })
  }

  deleteAllCompletedTodo = () => {
    this.setState(prev => ({
      todos: prev.todos.filter(t => !t.completed),
    }))
  }

  toggleTodo = id => {
    this.setState(prev => ({
      todos: prev.todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    }))
  }

  toggleAllTodo = () => {
    const isAllCompleted = this.state.todos.every(t => t.completed)
    this.setState(prev => ({
      todos: prev.todos.map(t => ({ ...t, completed: !isAllCompleted })),
    }))
  }

  addTodo = text => {
    this.setState(prev => ({
      todos: prev.todos.concat({
        id: uuid(),
        text,
        completed: false,
      }),
    }))
  }

  changeFilter = filter => this.setState({ filter })

  render() {
    const { todos, filter } = this.state
    let input

    return (
      <Fragment>
        <section className="todoapp">
          <header>
            <h1>Nutanix Todo</h1>
            <form
              onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                  return
                }
                this.addTodo(input.value)
                input.value = ''
              }}
            >
              <input
                className="new-todo"
                ref={node => (input = node)}
                placeholder="What needs to be done?"
              />
            </form>
          </header>
          <section className="main">
            <TodoList
              todos={this.getVisibleTodos()}
              deleteTodo={this.deleteTodo}
              toggleAllTodo={this.toggleAllTodo}
              toggleTodo={this.toggleTodo}
            />
          </section>
          <Footer
            count={todos.length}
            filter={filter}
            deleteAllCompletedTodo={this.deleteAllCompletedTodo}
            deleteAllTodo={this.deleteAllTodo}
            onLinkClick={this.changeFilter}
          />
        </section>
        <div className="logo">
          <Logo />
        </div>
      </Fragment>
    )
  }
}
