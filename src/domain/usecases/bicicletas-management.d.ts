import type { Bicicleta, BicicletaParams } from '../models'

export interface BicicletasManagement {
  insert: (data: BicicletaParams) => Promise<Bicicleta>
  update: (data: BicicletaParams) => Promise<Bicicleta>
  delete: (id: number) => Promise<void>
}
