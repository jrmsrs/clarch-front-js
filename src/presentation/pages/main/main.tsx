import { Link } from 'react-router-dom'

function HelloWorld (): JSX.Element {
  return (
    <>
      <ul>
        <li>
          <Link to={'/bicicletas'}>go to /bicicletas</Link>
        </li>
        <li>
          <Link to={'/hello-world'}>go to /hello-world</Link>
        </li>
      </ul>
    </>
  )
}

export default HelloWorld
