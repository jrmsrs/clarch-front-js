import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelloWorld, Main } from '@/presentation/pages'
import { PageContainer } from '@/presentation/components'
import './index.css'
import React from 'react'

interface Props {
  makeBicicletas: React.FC
  makeBicicleta: React.FC
}

const Router = (
  { makeBicicletas, makeBicicleta }: Props
) => {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: '/',
        element: <PageContainer><Main /></PageContainer>
      },
      {
        path: '/bicicletas',
        element: <PageContainer>{React.createElement(makeBicicletas)}</PageContainer>
      },
      {
        path: '/bicicletas/:bicicletaId',
        element: <PageContainer>{React.createElement(makeBicicleta)}</PageContainer>
      },
      {
        path: '/hello-world',
        element: <PageContainer><HelloWorld /></PageContainer>
      }
    ])} />
  )
}

export default Router
