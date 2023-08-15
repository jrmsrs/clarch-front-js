import { Link } from '@/presentation/components'

function Bicicletas (): JSX.Element {
  return (
    <>
      <h1 aria-label="heading">Listagem de bicicletas</h1>
      <ul aria-label='list'>
        <li>
          <Link to={'/bicicletas/1'}>go to /bicicletas/1</Link>
        </li>
        <li>
          <Link to={'/bicicletas/2'}>go to /bicicletas/2</Link>
        </li>
      </ul>
    </>
  )
}

export default Bicicletas
