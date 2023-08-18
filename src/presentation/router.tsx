import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelloWorld, Main, Bicicleta } from '@/presentation/pages'
import { PageContainer } from '@/presentation/components'
import './index.css'
import React from 'react'

interface Props {
  makeBicicletas: React.FC
}

const Router = (
  { makeBicicletas }: Props
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
        element: <PageContainer><Bicicleta /></PageContainer>
      },
      {
        path: '/hello-world',
        element: <PageContainer><HelloWorld /></PageContainer>
      }
    ])} />
  )
}

export default Router
