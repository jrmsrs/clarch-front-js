import React from 'react'
import { Link } from '@/presentation/components'

function HelloWorld (): React.JSX.Element {
  return (
    <ul aria-label="navlinks">
      <li>
        <Link to={'/bicicletas'}>go to /bicicletas</Link>
      </li>
      <li>
        <Link to={'/hello-world'}>go to /hello-world</Link>
      </li>
    </ul>
  )
}

export default HelloWorld
