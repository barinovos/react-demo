import { getTodos } from '../getTodos'
import { runSaga } from 'redux-saga'
import { Promise } from 'bluebird'
import actionTypes from '../../constants/actionTypes'
import provider from '../../utils/provider'

jest.mock('../../utils/provider')

describe('getTodos saga', () => {
  it('creates GET_TODOS_SUCCESS action when fetching Todos', async () => {
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

    const dispatched = []

    const saga = await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({}),
      },
      getTodos
    ).toPromise()

    expect(dispatched[0]).toEqual({
      type: actionTypes.GET_TODOS_SUCCESS,
      payload: todos,
    })
  })
})
