import type { Bicicleta } from '../models'

export type BicicletaParams = Omit<Bicicleta, 'id'>

export interface AddBicicleta {
  add: (data: BicicletaParams) => Promise<Bicicleta>
}

export interface UpdateBicicleta {
  update: (data: BicicletaParams) => Promise<Bicicleta>
}

export interface LoadBicicletas {
  loadAll: () => Promise<Bicicleta[]>
}

export interface LoadBicicletaById {
  loadById: (id: number) => Promise<Bicicleta>
}

export interface DeleteBicicleta {
  delete: (id: number) => Promise<void>
}

export interface LoadBicicletaByNumero {
  loadByNumero: (numero: number) => Promise<Bicicleta>
}
