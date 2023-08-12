import { useParams } from 'react-router-dom'

function Bicicletas (): JSX.Element {
  const { bicicletaId } = useParams()

  return (
    <div>
      <h1>Bicicleta ID-{bicicletaId}</h1>
    </div>
  )
}

export default Bicicletas
