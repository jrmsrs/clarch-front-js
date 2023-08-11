import React from 'react'

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-md">
      {children}
    </div>
  )
}

export default PageContainer
