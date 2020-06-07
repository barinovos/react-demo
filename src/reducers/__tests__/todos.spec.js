import todos from '../todos'
import provider from '../../utils/provider'

jest.mock('../../utils/provider')

describe('todos reducer', () => {
  it('should handle initial state', () => {
    provider.getProvider.mockImplementation(() => ({
      getTodos: () => [],
    }))
    expect(todos(undefined, {})).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    provider.getProvider.mockImplementation(() => ({
      addTodo: () => [
        {
          text: 'Run the tests',
          completed: false,
          id: 'id',
        },
      ],
    }))
    const newTodos = todos([], {
      type: 'ADD_TODO',
      text: 'Run the tests',
    })

    expect(newTodos[0].text).toEqual('Run the tests')
    expect(newTodos[0].completed).toEqual(false)
    expect(newTodos[0].id).toEqual('id')
  })
})
