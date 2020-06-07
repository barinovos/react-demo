import React, { Fragment } from 'react'
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Loader from '../containers/Loader'
import Error from '../containers/Error'
import Logo from './Logo'

const App = () => (
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

export default App
