import React from 'react'
import { Link } from 'react-router-dom'

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='p-4'>
      <div className="w-full backdrop-blur-xl rounded-xl">
        <header className='bg-zinc-100 dark:bg-zinc-900 p-4 rounded-t-2xl'>
          <div>
            <Link className='text-black dark:text-white' to={'/'}>bicicletário</Link>
          </div>
        </header>
        <main className='bg-zinc-200 dark:bg-zinc-800 p-4 rounded-b-xl min-h-[32rem] shadow-2xl opacity-75 '>
          {children}
        </main>
      </div>
    </div>
  )
}

export default PageContainer
