import { useParams } from 'react-router-dom'

function Bicicletas (): JSX.Element {
  const { bicicletaId } = useParams()

  return (
    <>
      <h1 aria-label="heading">
        Bicicleta ID-{bicicletaId}
      </h1>
    </>
  )
}

export default Bicicletas
