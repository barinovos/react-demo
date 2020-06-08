import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Loader from '../containers/Loader'
import Error from '../containers/Error'
import Logo from './Logo'

const App = ({ getTodos }) => {
  // aka constructor
  useEffect(() => getTodos())

  return (
    <Fragment>
      <section className="todoapp">
        <header>
          <h1>Nutanix Todo</h1>
          <AddTodo />
        </header>
        <section className="main">
          <VisibleTodoList />
        </section>
        <Footer />
      </section>
      <div className="logo">
        <Logo />
      </div>
      <Loader />
      <Error />
    </Fragment>
  )
}

App.propTypes = {
  getTodos: PropTypes.func.isRequired,
}

export default App
