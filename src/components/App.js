import React, { Fragment, Component } from 'react'
import keyMirror from 'keymirror'
import storageProvider from '../utils/provider'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'
import Logo from './Logo'
import Error from './Error'
import AddTodo from './AddTodo'

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
    try {
      const todos = provider.getTodos()
      this.state = {
        todos,
        filter: FILTER.SHOW_ALL,
        error: {
          show: false,
        },
      }
    } catch ({ message }) {
      this.state = {
        todos: [],
        filter: FILTER.SHOW_ALL,
        error: {
          show: true,
          message,
        },
      }
    }
  }

  showError = message => {
    this.setState({
      error: {
        show: true,
        message,
      },
    })
    setTimeout(() => {
      this.setState({
        error: {
          show: false,
        },
      })
    }, 5000)
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
    try {
      const todos = provider.deleteTodo(id)
      this.setState({
        todos,
      })
    } catch ({ message }) {
      this.showError(message)
    }
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
    try {
      const todos = provider.toggleTodo(id)
      this.setState({
        todos,
      })
    } catch ({ message }) {
      this.showError(message)
    }
  }

  toggleAllTodo = () => {
    const todos = provider.toggleAllTodo()
    this.setState({ todos })
  }

  addTodo = text => {
    try {
      const todos = provider.addTodo(text)
      this.setState({
        todos,
      })
    } catch ({ message }) {
      this.showError(message)
    }
  }

  changeFilter = filter => this.setState({ filter })

  render() {
    const { todos, filter, error } = this.state
    return (
      <Fragment>
        <section className="todoapp">
          <header>
            <h1>Nutanix Todo</h1>
            <AddTodo addTodo={this.addTodo} />
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
        <Error show={error.show} message={error.message} />
      </Fragment>
    )
  }
}
