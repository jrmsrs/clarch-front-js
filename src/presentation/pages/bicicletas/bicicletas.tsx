import { Link } from '@/presentation/components'
import type { BicicletasQuery } from '@/domain/usecases'
import { useEffect, useState } from 'react'
import type { Bicicleta } from '@/domain/models'

interface Props {
  query: BicicletasQuery
}

const Bicicletas: React.FC<Props> = (props: Props) => {
  const { query } = props
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [bicicletas, setBicicletas] = useState<Bicicleta[]>([])
  useEffect(() => {
    query.getAll()
      .then((bicicletas) => {
        setError('')
        setBicicletas(bicicletas)
      })
      .catch((error) => {
        setBicicletas([])
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [query])

  return (
    <>
      <h1 aria-label="heading">Listagem de bicicletas</h1>
      {loading && <p aria-label="loading">Carregando...</p>}
      {error && <p aria-label="error">{error}</p>}
      {bicicletas.length > 0 && (
        <ul aria-label='list'>
          {bicicletas.map(bicicleta => (
          <div key={bicicleta.id}>
            <li>
              <Link to={`/bicicletas/${bicicleta.id}`}>
                {`${bicicleta.modelo}-${bicicleta.numero} (${bicicleta.marca})`}
              </Link>
            </li>
          </div>
          ))}
        </ul>
      )}
    </>
  )
}

export default Bicicletas
