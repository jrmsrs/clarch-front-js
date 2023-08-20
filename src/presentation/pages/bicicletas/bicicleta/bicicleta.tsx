import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { type Bicicleta as BicicletaModel } from '@/domain/models'
import { type BicicletasQuery } from '@/domain/usecases'

interface Props {
  query: BicicletasQuery
}

const Bicicleta: React.FC<Props> = (props: Props) => {
  const { bicicletaId } = useParams()
  const { query } = props
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [bicicleta, setBicicleta] = useState<BicicletaModel>()
  useEffect(() => {
    query.getById(Number(bicicletaId))
      .then((bicicleta) => {
        setError('')
        setBicicleta(bicicleta)
      })
      .catch((error) => {
        setBicicleta(undefined)
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [query, bicicletaId])

  return (
    <>
      <h1 aria-label="heading">
        Bicicleta ID-{bicicletaId}
      </h1>
      {loading && <p aria-label="loading">Carregando...</p>}
      {error && <p aria-label="error">{error}</p>}
      {bicicleta && (
        <div aria-label='bicicleta' className='[&>p]:my-0'>
          <p aria-label='bicicleta-modelo'>
            Modelo: {bicicleta.modelo}
          </p>
          <p aria-label='bicicleta-marca'>
            Marca: {bicicleta.marca}
          </p>
          <p aria-label='bicicleta-numero'>
            Numero: {bicicleta.numero}
          </p>
          <p aria-label='bicicleta-ano'>
            Ano: {bicicleta.ano}
          </p>
          <p aria-label='bicicleta-status'>
            Status: {bicicleta.status}
          </p>
        </div>
      )}
    </>
  )
}

export default Bicicleta
