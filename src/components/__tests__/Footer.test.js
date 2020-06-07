import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import { RenderWithProvider } from '../../utils/testUtils'
import Footer from '../Footer'
import FilterLink from '../../containers/FilterLink'
import VisibilityFilters from '../../constants/visibilityFilters'

const store = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
  loading: false,
}

describe('Footer', () => {
  test('renders count text', () => {
    const { getByText } = render(
      <RenderWithProvider store={store}>
        <Footer count={10} />
      </RenderWithProvider>
    )

    expect(getByText(/10/i)).toBeInTheDocument()
    expect(getByText('item(s) left')).toBeInTheDocument()
  })

  test('renders elements', () => {
    const wrapper = mount(
      <RenderWithProvider store={store}>
        <Footer count={1} />
      </RenderWithProvider>
    )

    expect(
      wrapper.contains(
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      )
    ).toBeTruthy()
    expect(
      wrapper.contains(
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      )
    ).toBeTruthy()
    expect(
      wrapper.contains(
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      )
    ).toBeTruthy()
  })
})
