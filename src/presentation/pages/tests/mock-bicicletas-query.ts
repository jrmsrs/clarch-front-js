import type { BicicletasQuery } from '@/domain/usecases'
import { type Bicicleta, BicicletaStatus } from '@/domain/models'
import { faker } from '@faker-js/faker'

const genBicicleta = (): Bicicleta => ({
  id: faker.number.int(),
  marca: faker.vehicle.manufacturer(),
  modelo: faker.vehicle.model(),
  ano: String(faker.number.int({ min: 1900, max: 2025 })),
  numero: faker.number.int(),
  status: faker.helpers.arrayElement(Object.values(BicicletaStatus))
})

export class BicicletasQuerySpy implements BicicletasQuery {
  result: Bicicleta[]
  errorMsg?: string
  constructor (options: { numOfBicicletas?: number, bicicletaId?: number, errorMsg?: string }) {
    this.result = Array.from({ length: options.numOfBicicletas ?? 1 }, genBicicleta)
    this.errorMsg = options.errorMsg
  }

  async getAll (): Promise<Bicicleta[]> {
    if (this.errorMsg) throw new Error(this.errorMsg)
    return this.result
  }

  async getById (): Promise<Bicicleta> {
    if (this.errorMsg) throw new Error(this.errorMsg)

    return this.result[0]
  }
}
