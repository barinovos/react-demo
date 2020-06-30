import actionTypes from '../constants/actionTypes'

const searchReducer = (
  state = { inProgress: false, result: [] },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.SEARCH_TODOS_PROGRESS:
      return {
        inProgress: true,
        result: [],
      }
    case actionTypes.SEARCH_TODOS_DONE:
      return {
        inProgress: false,
        result: payload,
      }
    case actionTypes.SEARCH_TODOS_FAILED:
      return {
        inProgress: false,
        failed: true,
        result: [],
      }
    default:
      return state
  }
}

export default searchReducer
