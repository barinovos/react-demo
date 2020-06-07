import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export const RenderWithProvider = ({ store, children }) => (
  <Provider store={createStore(() => store)}>{children}</Provider>
)
