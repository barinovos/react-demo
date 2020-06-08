import * as actions from '../index'
import actionTypes from '../../constants/actionTypes'

describe('todo actions', () => {
  it('addTodo should create actionTypes.ADD_TODO_REQUEST action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: actionTypes.ADD_TODO_REQUEST,
      payload: {
        text: 'Use Redux',
      },
    })
  })

  it('setVisibilityFilter should create actionTypes.SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: actionTypes.SET_VISIBILITY_FILTER,
      payload: {
        filter: 'active',
      },
    })
  })

  it('toggleTodo should create actionTypes.TOGGLE_TODO_REQUEST action', () => {
    expect(actions.toggleTodo('1')).toEqual({
      type: actionTypes.TOGGLE_TODO_REQUEST,
      payload: {
        id: '1',
      },
    })
  })

  it('toggleAllTodo should create actionTypes.TOGGLE_ALL_TODO_REQUEST action', () => {
    expect(actions.toggleAllTodo()).toEqual({
      type: actionTypes.TOGGLE_ALL_TODO_REQUEST,
    })
  })

  it('deleteTodo should create actionTypes.DELETE_TODO_REQUEST action', () => {
    expect(actions.deleteTodo('1')).toEqual({
      type: actionTypes.DELETE_TODO_REQUEST,
      payload: {
        id: '1',
      },
    })
  })

  it('deleteAllTodo should create actionTypes.DELETE_ALL_TODO_REQUEST action', () => {
    expect(actions.deleteAllTodo()).toEqual({
      type: actionTypes.DELETE_ALL_TODO_REQUEST,
    })
  })

  it('deleteAllCompletedTodo should create actionTypes.DELETE_ALL_COMPLETED_TODO_REQUEST action', () => {
    expect(actions.deleteAllCompletedTodo()).toEqual({
      type: actionTypes.DELETE_ALL_COMPLETED_TODO_REQUEST,
    })
  })
})
