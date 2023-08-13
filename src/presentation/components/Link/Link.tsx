import React from 'react'
import { Link } from 'react-router-dom'
import './Link.css'

interface TitleBarProps {
  children: React.ReactNode
  to: string
}

const LinkComponent: React.FC<TitleBarProps> = ({ children, to }: TitleBarProps) => {
  return (
    <Link
      className='text-stroke hover:font-light
        text-black      hover:text-white
        dark:text-white dark:hover:text-black'
      to={to}
    >
      {children}
    </Link>
  )
}

export default LinkComponent
