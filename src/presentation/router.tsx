import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { HelloWorld } from '@/presentation'
import '@/presentation/styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Link to={"/hello-world"}>go to /hello-world</Link>
  },
  {
    path: '/hello-world',
    element: <HelloWorld />
  }
])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
