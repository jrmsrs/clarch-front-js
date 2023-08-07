import type { Bicicleta } from '../models'

export interface BicicletasQuery {
  getAll: () => Promise<Bicicleta[]>
  getById: (id: number) => Promise<Bicicleta>
}
