import React, { Fragment, Component } from 'react'
import keyMirror from 'keymirror'
import storageProvider from '../utils/provider'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'
import Logo from './Logo'

let provider

export const FILTER = keyMirror({
  SHOW_ALL: null,
  SHOW_COMPLETED: null,
  SHOW_ACTIVE: null,
})

export default class App extends Component {
  constructor(props) {
    super(props)

    provider = storageProvider.getProvider()
    this.state = {
      todos: provider.getTodos(),
      filter: FILTER.SHOW_ALL,
    }
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
    const todos = provider.deleteTodo(id)
    this.setState({
      todos,
    })
  }

  deleteAllTodo = () => {
    const todos = provider.deleteAllTodo()
    this.setState({ todos })
  }

  deleteAllCompletedTodo = () => {
    const todos = provider.deleteAllCompletedTodo()
    this.setState({ todos })
  }

  toggleTodo = id => {
    const todos = provider.toggleTodo(id)
    this.setState({
      todos,
    })
  }

  toggleAllTodo = () => {
    const todos = provider.toggleAllTodo()
    this.setState({ todos })
  }

  addTodo = text => {
    const todos = provider.addTodo(text)
    this.setState({
      todos,
    })
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
