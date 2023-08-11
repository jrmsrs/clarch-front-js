import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelloWorld, Main } from '@/presentation/pages'
import { PageContainer } from '@/presentation/components'
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
    <PageContainer>
      <RouterProvider router={router} />
    </PageContainer>
  )
}

export default Router
