import type { Bicicleta } from '@/domain/models'
import type { BicicletasQuery } from '@/domain/usecases'
import { HttpStatusCode } from '@/data/http'
import type { HttpGetClient } from '@/data/http'
import { NoContentFoundError, NotFoundError, UnexpectedError } from '@/domain/errors'

const formatUrl = (path: string = ''): string => {
  return `${String(import.meta.env.VITE_EQUIPAMENTO_URL)}/bicicleta${path}`
}

export class RemoteBicicletasQuery implements BicicletasQuery {
  constructor (
    private readonly httpGetClient: HttpGetClient<Bicicleta[] | Bicicleta>
  ) {}

  async getAll (): Promise<Bicicleta[]> {
    const serverUrl = formatUrl()
    const httpResponse = await this.httpGetClient.get({ url: serverUrl })
    const remoteBicicletas = httpResponse.body as Bicicleta[] ?? []
    if (remoteBicicletas.length > 0) {
      return remoteBicicletas
    } else if (httpResponse.statusCode === HttpStatusCode.ok) {
      throw new NoContentFoundError('bicicleta')
    } else {
      throw new UnexpectedError('bicicleta')
    }
  }

  async getById (id: number): Promise<Bicicleta> {
    const serverUrl = formatUrl(`/${id}`)
    const httpResponse = await this.httpGetClient.get({ url: serverUrl })
    const remoteBicicleta = httpResponse.body as Bicicleta ?? {}
    if (httpResponse.statusCode === HttpStatusCode.ok) {
      return remoteBicicleta
    } else if (httpResponse.statusCode === HttpStatusCode.notFound) {
      throw new NotFoundError('bicicleta')
    } else {
      throw new UnexpectedError('bicicleta')
    }
  }
}
