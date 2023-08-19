import { useParams } from 'react-router-dom'

interface Props {
  query: any
}

const Bicicletas: React.FC<Props> = (props: Props) => {
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
