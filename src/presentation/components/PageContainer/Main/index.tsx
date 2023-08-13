import React from 'react'

const MainContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className='bg-zinc-200 dark:bg-zinc-900 p-4 rounded-b-xl min-h-[32rem] shadow-2xl opacity-80'>
      {children}
    </main>
  )
}

export default MainContainer
