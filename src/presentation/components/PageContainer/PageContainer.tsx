import React from 'react'
import TitleBar from './TitleBar'
import Main from './Main'

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='p-4'>
      <div className="w-full backdrop-blur-xl rounded-xl">
        <TitleBar title='Bicicletário' />
        <Main>{children}</Main>
      </div>
    </div>
  )
}

export default PageContainer
