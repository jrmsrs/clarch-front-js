import type { Bicicleta } from '@/domain/models'
import type { BicicletasQuery } from '@/domain/usecases'

export class RemoteBicicletasQuery implements BicicletasQuery {
  async getAll (): Promise<Bicicleta[]> {
    return await Promise.resolve([]) as Bicicleta[]
  }

  async getById (id: number): Promise<Bicicleta> {
    return await Promise.resolve({}) as Bicicleta
  }
}
