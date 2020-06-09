import React, { Fragment, Component } from 'react'
import keyMirror from 'keymirror'
import storageProvider from '../utils/provider'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'
import Logo from './Logo'
import Error from './Error'
import AddTodo from './AddTodo'
import Loader from './Loader'

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
      todos: [],
      filter: FILTER.SHOW_ALL,
      error: {
        show: false,
      },
      loading: true,
    }
    provider
      .getTodos()
      .then(todos => {
        this.setState({ todos, loading: false })
      })
      .catch(({ message }) => this.showError(message))
  }

  showError = message => {
    this.setState({
      loading: false,
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
    this.setState({ loading: true })
    provider
      .deleteTodo(id)
      .then(todos => {
        this.setState({ todos, loading: false })
      })
      .catch(({ message }) => this.showError(message))
  }

  deleteAllTodo = () => {
    this.setState({ loading: true })
    provider
      .deleteAllTodo()
      .then(todos => {
        this.setState({ todos, loading: false })
      })
      .catch(({ message }) => this.showError(message))
  }

  deleteAllCompletedTodo = () => {
    this.setState({ loading: true })
    provider
      .deleteAllCompletedTodo()
      .then(todos => {
        this.setState({ todos, loading: false })
      })
      .catch(({ message }) => this.showError(message))
  }

  toggleTodo = id => {
    this.setState({ loading: true })
    provider
      .toggleTodo(id)
      .then(todos => {
        this.setState({ todos, loading: false })
      })
      .catch(({ message }) => this.showError(message))
  }

  toggleAllTodo = () => {
    this.setState({ loading: true })
    provider
      .toggleAllTodo()
      .then(todos => {
        this.setState({ todos, loading: false })
      })
      .catch(({ message }) => this.showError(message))
  }

  addTodo = text => {
    this.setState({ loading: true })
    provider
      .addTodo(text)
      .then(todos => {
        this.setState({ todos, loading: false })
      })
      .catch(({ message }) => this.showError(message))
  }

  changeFilter = filter => this.setState({ filter })

  render() {
    const { todos, filter, error, loading } = this.state
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
        <Loader loading={loading} />
        <Error show={error.show} message={error.message} />
      </Fragment>
    )
  }
}
