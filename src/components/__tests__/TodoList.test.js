import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../TodoList'
import Todo from '../Todo'
import SelectAll from '../SelectAll'

describe('TodoList', () => {
  test('does not renders SelectAll for empty array', () => {
    const wrapper = shallow(
      <TodoList
        deleteTodo={jest.fn()}
        toggleTodo={jest.fn()}
        toggleAllTodo={jest.fn()}
        todos={[]}
      />
    )

    expect(wrapper.exists(SelectAll)).toBeFalsy()
  })

  test('renders proper amount of Todo components', () => {
    const todos = [
      {
        text: 'text',
        completed: false,
        id: 'id',
      },
      {
        text: 'text2',
        completed: true,
        id: 'id2',
      },
    ]
    const wrapper = shallow(
      <TodoList
        deleteTodo={jest.fn()}
        toggleTodo={jest.fn()}
        toggleAllTodo={jest.fn()}
        todos={todos}
      />
    )

    expect(wrapper.find(Todo).length).toEqual(todos.length)
    expect(wrapper.exists(SelectAll)).toBeTruthy()
  })
})
