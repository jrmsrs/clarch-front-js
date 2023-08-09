import type { Bicicleta } from '@/domain/models'
import type { BicicletasQuery } from '@/domain/usecases'
import { HttpStatusCode } from '@/data/http'
import type { HttpGetClient } from '@/data/http'

const formatUrl = (url: string = ''): string => {
  return `${String(import.meta.env.VITE_EQUIPAMENTO_URL)}/bicicleta${url}`
}

export class RemoteBicicletasQuery implements BicicletasQuery {
  constructor (
    private readonly httpGetClient: HttpGetClient<Bicicleta[] | Bicicleta>
  ) {}

  async getAll (): Promise<Bicicleta[]> {
    const serverUrl = formatUrl()
    const httpResponse = await this.httpGetClient.get({ url: serverUrl })
    const remoteBicicletas = httpResponse.body as Bicicleta[] ?? []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteBicicletas.map(bicicleta => ({ ...bicicleta, ano: bicicleta.ano.toString() }))
      default: throw new Error('Algo inesperado aconteceu.')
    }
  }

  async getById (id: number): Promise<Bicicleta> {
    const serverUrl = formatUrl(`/${id}`)
    const httpResponse = await this.httpGetClient.get({ url: serverUrl })
    const remoteBicicleta = httpResponse.body as Bicicleta ?? {}
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return { ...remoteBicicleta, ano: remoteBicicleta.ano.toString() }
      default: throw new Error('Algo inesperado aconteceu.')
    }
  }
}
