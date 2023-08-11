import { Link } from 'react-router-dom'

function HelloWorld (): JSX.Element {
  return (
    <Link to={'/hello-world'}>go to /hello-world</Link>
  )
}

export default HelloWorld
