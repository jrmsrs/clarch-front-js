import { Link } from '@/presentation/components'
import type { BicicletasQuery } from '@/domain/usecases'

interface Props {
  query: BicicletasQuery
}

const Bicicletas: React.FC<Props> = (props: Props) => {
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
