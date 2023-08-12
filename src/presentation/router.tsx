import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelloWorld, Main, Bicicletas } from '@/presentation/pages'
import { PageContainer } from '@/presentation/components'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer><Main /></PageContainer>
  },
  {
    path: '/bicicletas',
    element: <PageContainer><Bicicletas /></PageContainer>
  },
  {
    path: '/hello-world',
    element: <PageContainer><HelloWorld /></PageContainer>
  }
])

const Router = (): JSX.Element => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
