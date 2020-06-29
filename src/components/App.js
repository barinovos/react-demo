import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SyncPanel from '../containers/SyncPanel'
import Loader from './Loader'
import Error from './Error'
import Congrats from './Congrats'
import Logo from './Logo'

const App = ({ getTodos, error, loading, congrats }) => {
  // aka constructor
  useEffect(() => {
    getTodos()
  }, []) // eslint-disable-line

  return (
    <Fragment>
      <SyncPanel />
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
      {loading && <Loader />}
      {error.show && <Error message={error.message} />}
      {congrats && <Congrats />}
    </Fragment>
  )
}

App.propTypes = {
  getTodos: PropTypes.func.isRequired,
  error: PropTypes.shape({
    show: PropTypes.bool,
    message: PropTypes.string,
  }),
  loading: PropTypes.bool,
  congrats: PropTypes.bool,
}

export default App
