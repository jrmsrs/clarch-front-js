import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelloWorld, Main } from '@/presentation/pages'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/hello-world',
    element: <HelloWorld />
  }
])

const Router = (): JSX.Element => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
