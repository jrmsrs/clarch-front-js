import { describe, it, expect } from 'vitest'
import { type Bicicleta, BicicletaStatus } from '@/domain/models'
import { RemoteBicicletasQuery } from './remote'
import { HttpGetClientSpy } from '@/data/test'
import { NoContentFoundError, NotFoundError, UnexpectedError } from '@/domain/errors'
import { faker } from '@faker-js/faker'

const makeSut = (response?: { statusCode: number, body: any }) => {
  const httpSpy = new HttpGetClientSpy<Bicicleta>()
  if (response) httpSpy.response = response
  const sut = new RemoteBicicletasQuery(httpSpy)
  return { sut, httpSpy }
}

const makeBicicleta = (): Bicicleta => ({
  id: faker.number.int(),
  modelo: faker.vehicle.vrm(),
  ano: `${faker.date.past().getFullYear()}`,
  marca: faker.company.name(),
  numero: faker.number.int(),
  status: faker.helpers.arrayElement(Object.values(BicicletaStatus))
})

describe('remote bicicletas-query usecase getAll()', () => {
  it('should call HttpGetClient with correct url', async () => {
    const { sut, httpSpy } = makeSut({ statusCode: 200, body: [makeBicicleta()] })
    await sut.getAll()
    expect(httpSpy.url).toBe(`${String(import.meta.env.VITE_SERVER)}/bicicleta`)
  })

  it('should return a list of bicicletas if HttpGetClient returns 200', async () => {
    const { sut } = makeSut({ statusCode: 200, body: [makeBicicleta()] })
    const bicicletas = await sut.getAll()
    expect(bicicletas).toBeTruthy()
  })

  it('should throw if HttpGetClient returns an empty array', async () => {
    const { sut } = makeSut({
      statusCode: 200, body: []
    })
    const promise = sut.getAll()
    await expect(promise).rejects.toThrow(new NoContentFoundError('bicicleta'))
  })

  it('should throw if HttpGetClient returns an unexpected error', async () => {
    const { sut } = makeSut({
      statusCode: 500, body: undefined
    })
    const promise = sut.getAll()
    await expect(promise).rejects.toThrow(new UnexpectedError('bicicleta'))
  })
})

describe('remote bicicletas-query usecase getById()', () => {
  it('should call HttpGetClient with correct url', async () => {
    const { sut, httpSpy } = makeSut()
    const id = faker.number.int()
    await sut.getById(id)
    expect(httpSpy.url).toBe(`${String(import.meta.env.VITE_SERVER)}/bicicleta/${id}`)
  })

  it('should return a bicicleta if HttpGetClient returns 200', async () => {
    const { sut } = makeSut({
      statusCode: 200, body: makeBicicleta()
    })
    const bicicleta = await sut.getById(1)
    expect(bicicleta).toBeTruthy()
  })

  it('should throw if HttpGetClient returns not found', async () => {
    const { sut } = makeSut({ statusCode: 404, body: undefined })
    const promise = sut.getById(1)
    await expect(promise).rejects.toThrow(new NotFoundError('bicicleta'))
  })

  it('should throw if HttpGetClient returns an unexpected error', async () => {
    const { sut } = makeSut({ statusCode: 500, body: undefined })
    const promise = sut.getById(1)
    await expect(promise).rejects.toThrow(new UnexpectedError('bicicleta'))
  })
})
