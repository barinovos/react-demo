import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import Todo from '../Todo'

describe('Todo', () => {
  test('renders text', () => {
    const { getByText } = render(
      <Todo
        onDelete={jest.fn()}
        onToggle={jest.fn()}
        completed={false}
        text={'some text'}
      />
    )

    expect(getByText(/some text/i)).toBeInTheDocument()
  })

  test('renders checkbox with checked value', () => {
    const wrapper = mount(
      <Todo
        onDelete={jest.fn()}
        onToggle={jest.fn()}
        completed={true}
        text={'some text'}
      />
    )

    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value')
    ).toBeTruthy()
  })

  test('call onToggle', () => {
    const onToggle = jest.fn()
    const wrapper = mount(
      <Todo
        onDelete={jest.fn()}
        onToggle={onToggle}
        completed={false}
        text={'some text'}
      />
    )

    wrapper
      .find('li')
      .first()
      .simulate('click')
    expect(onToggle).toHaveBeenCalled()
  })

  test('call onToggle', () => {
    const onDelete = jest.fn()
    const wrapper = mount(
      <Todo
        onDelete={onDelete}
        onToggle={jest.fn()}
        completed={false}
        text={'some text'}
      />
    )

    wrapper
      .find('button')
      .first()
      .simulate('click')
    expect(onDelete).toHaveBeenCalled()
  })
})
