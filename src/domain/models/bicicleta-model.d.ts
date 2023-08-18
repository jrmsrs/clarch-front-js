export enum BicicletaStatus {
  EM_USO = 'em uso',
  DISPONIVEL = 'disponível',
  REPARO_SOLICITADO = 'reparo solicitado',
  NOVA = 'nova',
  APOSENTADA = 'aposentada',
  EM_REPARO = 'em reparo'
}

export type Bicicleta = {
  id: number
  marca: string
  modelo: string
  ano: string
  numero: number
  status: BicicletaStatus
}

export type BicicletaParams = Omit<Bicicleta, 'id'>
