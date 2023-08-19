import { Bicicleta as BicicletaPage } from '@/presentation/pages'
import { RemoteBicicletasQuery } from '@/data/usecases'
import { AxiosHttpClient } from '@/infra/http'
import type { Bicicleta } from '@/domain/models'

export const makeBicicleta = () => {
  const axiosHttpClient = new AxiosHttpClient<Bicicleta>()
  const remoteBicicletasQuery = new RemoteBicicletasQuery(axiosHttpClient)
  return (
    <BicicletaPage query={remoteBicicletasQuery} />
  )
}
