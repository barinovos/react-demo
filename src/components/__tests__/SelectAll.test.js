import React from 'react'
import { mount } from 'enzyme'
import SelectAll from '../SelectAll'

describe('SelectAll', () => {
  test('handles onToggle', () => {
    const onToggle = jest.fn()
    const wrapper = mount(<SelectAll onToggle={onToggle} />)

    wrapper
      .find('input')
      .first()
      .simulate('change')
    expect(onToggle).toHaveBeenCalled()
  })
})
