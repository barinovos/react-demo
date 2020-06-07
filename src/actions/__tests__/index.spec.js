import * as actions from '../index'
import actionTypes from '../../constants/actionTypes'

describe('todo actions', () => {
  it('addTodo should create actionTypes.ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: actionTypes.ADD_TODO,
      text: 'Use Redux',
    })
  })

  it('setVisibilityFilter should create actionTypes.SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: actionTypes.SET_VISIBILITY_FILTER,
      filter: 'active',
    })
  })

  it('toggleTodo should create actionTypes.TOGGLE_TODO action', () => {
    expect(actions.toggleTodo('1')).toEqual({
      type: actionTypes.TOGGLE_TODO,
      id: '1',
    })
  })

  it('toggleAllTodo should create actionTypes.TOGGLE_ALL_TODO action', () => {
    expect(actions.toggleAllTodo()).toEqual({
      type: actionTypes.TOGGLE_ALL_TODO,
    })
  })

  it('deleteTodo should create actionTypes.DELETE_TODO action', () => {
    expect(actions.deleteTodo('1')).toEqual({
      type: actionTypes.DELETE_TODO,
      id: '1',
    })
  })

  it('deleteAllTodo should create actionTypes.DELETE_ALL_TODO action', () => {
    expect(actions.deleteAllTodo()).toEqual({
      type: actionTypes.DELETE_ALL_TODO,
    })
  })

  it('deleteAllCompletedTodo should create actionTypes.DELETE_ALL_COMPLETED_TODO action', () => {
    expect(actions.deleteAllCompletedTodo()).toEqual({
      type: actionTypes.DELETE_ALL_COMPLETED_TODO,
    })
  })
})
