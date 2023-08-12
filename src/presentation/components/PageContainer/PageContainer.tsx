import React from 'react'
import { Link } from 'react-router-dom'

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='p-4'>
      <div className="w-full backdrop-blur-xl rounded-2xl">
        <header className='bg-zinc-900 p-4 rounded-t-2xl'>
          <Link className='text-white' to={'/'}>bicicletário</Link>
        </header>
        <main className='bg-zinc-800 p-4 rounded-b-2xl min-h-[32rem] shadow-2xl opacity-75 '>
          {children}
        </main>
      </div>
    </div>
  )
}

export default PageContainer
