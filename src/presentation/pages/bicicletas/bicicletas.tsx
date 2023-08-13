import { Link } from '@/presentation/components'

function Bicicletas (): JSX.Element {
  return (
    <div>
      <h1>Listagem de bicicletas</h1>
      <ul>
        <li>
          <Link to={'/bicicletas/1'}>go to /bicicletas/1</Link>
        </li>
        <li>
          <Link to={'/bicicletas/2'}>go to /bicicletas/2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Bicicletas
