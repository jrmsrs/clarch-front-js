import { describe, it, expect } from 'vitest'
import type { Bicicleta } from '@/domain/models'
import { RemoteBicicletasQuery } from './remote'
import { HttpGetClientSpy } from '@/data/test'

const makeSut = () => {
  const httpGetClientSpy = new HttpGetClientSpy<Bicicleta>()
  const sut = new RemoteBicicletasQuery(httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('test remote bicicletas-query usecase getAll()', () => {
  it('should return a list of bicicletas', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 200,
      body: [
        {
          id: 1,
          modelo: 'any_modelo',
          ano: '2021',
          marca: 'any_marca',
          numero: 13
        }
      ]
    }
    const bicicletas = await sut.getAll()
    expect(bicicletas).toBeTruthy()
  })

  it('should throw if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 404,
      body: undefined
    }
    const promise = sut.getAll()
    await expect(promise).rejects.toThrow(new Error('Algo inesperado aconteceu.'))
  })

  it('should throw if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 500,
      body: undefined
    }
    const promise = sut.getAll()
    await expect(promise).rejects.toThrow(new Error('Algo inesperado aconteceu.'))
  })
})

describe('test remote bicicletas-query usecase getById()', () => {
  it('should return a bicicleta', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 200,
      body: {
        id: 1,
        modelo: 'any_modelo',
        ano: '2021',
        marca: 'any_marca',
        numero: 13
      }
    }
    const bicicleta = await sut.getById(1)
    expect(bicicleta).toBeTruthy()
  })

  it('should throw if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 404,
      body: undefined
    }
    const promise = sut.getById(1)
    await expect(promise).rejects.toThrow(new Error('Algo inesperado aconteceu.'))
  })

  it('should throw if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 500,
      body: undefined
    }
    const promise = sut.getById(1)
    await expect(promise).rejects.toThrow(new Error('Algo inesperado aconteceu.'))
  })
})
