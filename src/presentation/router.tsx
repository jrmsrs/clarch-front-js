import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelloWorld, Main, Bicicletas, Bicicleta } from '@/presentation/pages'
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
    path: '/bicicletas/:bicicletaId',
    element: <PageContainer><Bicicleta /></PageContainer>
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
