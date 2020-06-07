import actionTypes from '../constants/actionTypes'

const errorReducer = (
  state = {
    show: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ERROR:
      return action.payload
    default:
      return state
  }
}

export default errorReducer
