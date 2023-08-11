import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { HelloWorld } from '@/presentation/pages'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Link to={'/hello-world'}>go to /hello-world</Link>
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
