import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import Link from '../Link'

describe('Link', () => {
  test('renders children', () => {
    const { getByText } = render(
      <Link onClick={jest.fn()} active={false}>
        Click me
      </Link>
    )

    expect(getByText(/Click me/i)).toBeInTheDocument()
  })

  test('handles onClick', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      <Link onClick={onClick} active={false}>
        Click me
      </Link>
    )

    wrapper
      .find('a')
      .first()
      .simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
