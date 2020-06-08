import actionTypes from '../constants/actionTypes'

export const showLoader = () => ({
  type: actionTypes.LOADING,
})

export const hideLoader = () => ({
  type: actionTypes.LOADED,
})
