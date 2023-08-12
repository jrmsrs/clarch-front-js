import React from 'react'
import { Link } from 'react-router-dom'

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full px-4">
      <header className='bg-zinc-900 p-4 rounded-t-md'>
        <Link to={'/'}>bicicletário</Link>
      </header>
      <main className='bg-zinc-800 p-4 rounded-b-md min-h-[32rem]'>
        {children}
      </main>
    </div>
  )
}

export default PageContainer
