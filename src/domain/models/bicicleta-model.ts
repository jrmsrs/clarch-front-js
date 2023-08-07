export type Bicicleta = {
  id: number
  marca: string
  modelo: string
  ano: string
  numero: number
}

export type BicicletaParams = Omit<Bicicleta, 'id'>
