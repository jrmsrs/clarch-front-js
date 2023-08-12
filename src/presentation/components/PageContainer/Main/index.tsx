import React from 'react'

const MainContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className='bg-zinc-200 dark:bg-zinc-800 p-4 rounded-b-xl min-h-[32rem] shadow-2xl opacity-75'>
      {children}
    </main>
  )
}

export default MainContainer
