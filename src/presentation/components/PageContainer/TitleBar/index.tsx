import { Link } from 'react-router-dom'
import NavButtons from './NavButtons'

interface TitleBarProps {
  title: string
}

const TitleBar = (props: TitleBarProps) => {
  return (
    <header aria-label="header" className='bg-zinc-200 dark:bg-zinc-900 px-4 py-2 rounded-t-xl flex flex-row justify-between'>
      <NavButtons />
      <div>
        <Link aria-label="navlink-home" className='text-black dark:text-white' to={'/'}>{props.title}</Link>
      </div>
      <div className='w-16' />
    </header>
  )
}

export default TitleBar
