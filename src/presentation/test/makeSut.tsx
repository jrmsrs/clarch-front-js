import React from 'react'
import { BrowserRouter, RouterProvider, createMemoryRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { render } from '@testing-library/react'

export const makePageSut = (element: React.JSX.Element, path = '/', params?: string) => {
  const routes: RouteObject[] = [{
    path,
    element
  }]
  const initialEntries = ['/']
  if (params) initialEntries.push(params)
  const router = createMemoryRouter(routes, {
    initialEntries
  })

  const sut = render(<RouterProvider router={router} />)
  return { sut }
}

export const makeComponentSut = (element: React.JSX.Element) => {
  const sut = render(element, { wrapper: BrowserRouter })
  return { sut }
}
