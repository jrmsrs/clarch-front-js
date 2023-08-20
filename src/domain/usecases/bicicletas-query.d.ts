import type { Bicicleta } from '@/domain/models'

export interface BicicletasQuery {
  getAll: () => Promise<Bicicleta[]>
  getById: (id: number) => Promise<Bicicleta>
}
