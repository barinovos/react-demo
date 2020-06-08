import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Promise } from 'bluebird'
import actionTypes from '../../constants/actionTypes'
import { getTodos } from '../getTodos'
import provider from '../../utils/provider'

jest.mock('../../utils/provider')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions -> getTodos', () => {
  let store
  beforeEach(() => {
    store = mockStore({ todos: [] })
  })

  it('creates ADD_TODO action when fetching Todos', () => {
    const todos = [
      {
        text: 'text',
        id: 'id',
        completed: false,
      },
    ]
    provider.getProvider.mockImplementationOnce(() => ({
      getTodos: () => Promise.resolve(todos),
    }))

    const expectedActions = [
      { type: actionTypes.LOADING },
      {
        type: actionTypes.SET_TODOS,
        payload: todos,
      },
      { type: actionTypes.LOADED },
    ]

    return store.dispatch(getTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
