import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import ActionsPanel from '../ActionsPanel'

describe('ActionsPanel', () => {
  test('renders action texts', () => {
    const { getByText } = render(
      <ActionsPanel
        deleteAllTodo={jest.fn()}
        deleteAllCompletedTodo={jest.fn()}
      />
    )

    expect(getByText('Delete All Completed')).toBeInTheDocument()
    expect(getByText('Delete All')).toBeInTheDocument()
  })

  test('calls functions on click, delete completed', () => {
    const deleteAllCompletedTodo = jest.fn()
    const wrapper = mount(
      <ActionsPanel
        deleteAllTodo={jest.fn()}
        deleteAllCompletedTodo={deleteAllCompletedTodo}
      />
    )

    wrapper
      .find('span')
      .first()
      .simulate('click')
    expect(deleteAllCompletedTodo).toHaveBeenCalled()
  })

  test('calls functions on click, delete all', () => {
    const deleteAllTodo = jest.fn()
    const wrapper = mount(
      <ActionsPanel
        deleteAllTodo={deleteAllTodo}
        deleteAllCompletedTodo={jest.fn()}
      />
    )

    wrapper
      .find('span')
      .at(1)
      .simulate('click')
    expect(deleteAllTodo).toHaveBeenCalled()
  })
})
