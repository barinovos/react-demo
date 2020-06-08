import { setVisibilityFilter } from '../setVisibilityFilter'
import actionTypes from '../../constants/actionTypes'

describe('Actions -> setVisibilityFilter', () => {
  it('should create actionTypes.SET_VISIBILITY_FILTER action', () => {
    expect(setVisibilityFilter('active')).toEqual({
      type: actionTypes.SET_VISIBILITY_FILTER,
      filter: 'active',
    })
  })
})
