import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import { RenderWithProvider } from '../../utils/testUtils'
import App from '../App'
import Footer from '../../containers/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Logo from '../Logo'

const store = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
  loading: false,
}

describe('App', () => {
  test('renders title', () => {
    const { getByText } = render(
      <RenderWithProvider store={store}>
        <App />
      </RenderWithProvider>
    )

    const linkElement = getByText(/Nutanix Todo/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('renders elements', () => {
    const wrapper = mount(
      <RenderWithProvider store={store}>
        <App />
      </RenderWithProvider>
    )

    expect(
      wrapper.contains(
        <div className="logo">
          <Logo />
        </div>
      )
    ).toBeTruthy()
    expect(wrapper.exists(Footer)).toBeTruthy()
    expect(wrapper.exists(AddTodo)).toBeTruthy()
    expect(wrapper.exists(VisibleTodoList)).toBeTruthy()
  })
})
