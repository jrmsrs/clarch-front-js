import React from 'react'
import TitleBar from './TitleBar'
import Main from './Main'

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='px-4'>
      <div aria-label="container" className="w-full backdrop-blur-xl rounded-xl">
        <TitleBar title='Bicicletário' />
        <Main>{children}</Main>
      </div>
    </div>
  )
}

export default PageContainer
