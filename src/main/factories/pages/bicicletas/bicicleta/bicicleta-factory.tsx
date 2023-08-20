import { makeRemoteBicicletasQuery } from '@/main/factories/usecases/bicicletas-query/query-remote-factory'
import { Bicicleta as BicicletaPage } from '@/presentation/pages'

export const makeBicicleta = () => <BicicletaPage query={makeRemoteBicicletasQuery()} />
