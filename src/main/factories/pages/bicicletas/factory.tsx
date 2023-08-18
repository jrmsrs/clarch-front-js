import { Bicicletas } from '@/presentation/pages'
import { RemoteBicicletasQuery } from '@/data/usecases'
import { AxiosHttpClient } from '@/infra/http'
import type { Bicicleta } from '@/domain/models'

export const makeBicicletas = () => {
  const axiosHttpClient = new AxiosHttpClient<Bicicleta>()
  const remoteBicicletasQuery = new RemoteBicicletasQuery(axiosHttpClient)
  return (
    <Bicicletas query={remoteBicicletasQuery} />
  )
}
