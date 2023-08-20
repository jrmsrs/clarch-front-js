import { Bicicletas } from '@/presentation/pages'
import { makeRemoteBicicletasQuery } from '@/main/factories/usecases/bicicletas-query/query-remote-factory'

export const makeBicicletas = () => <Bicicletas query={makeRemoteBicicletasQuery()} />
