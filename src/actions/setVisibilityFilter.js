import actionTypes from '../constants/actionTypes'

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter,
})
