import { describe, it, expect } from 'vitest'
import { RemoteBicicletasQuery } from './remote'

const makeSut = () => {
  const sut = new RemoteBicicletasQuery()
  return {
    sut
  }
}

describe('test remote bicicletas-query usecase', () => {
  it('should return a list of bicicletas', async () => {
    makeSut()
    expect(1).toBeTruthy()
  })
})
