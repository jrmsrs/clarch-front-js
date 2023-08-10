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

const bicicletaObj = {
  id: 1,
  modelo: 'any_modelo',
  ano: '2021',
  marca: 'any_marca',
  numero: 13
}

describe('remote bicicletas-query usecase getAll()', () => {
  it('should call HttpGetClient with correct url', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    await sut.getAll()
    expect(httpGetClientSpy.url).toBe(`${String(import.meta.env.VITE_EQUIPAMENTO_URL)}/bicicleta`)
  })

  it('should return a list of bicicletas if HttpGetClient returns 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 200,
      body: [bicicletaObj]
    }
    const bicicletas = await sut.getAll()
    expect(bicicletas).toBeTruthy()
  })

  it('should throw if HttpGetClient does not return 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 500,
      body: undefined
    }
    const promise = sut.getAll()
    await expect(promise).rejects.toThrow(new Error('Algo inesperado aconteceu.'))
  })
})

describe('remote bicicletas-query usecase getById()', () => {
  it('should call HttpGetClient with correct url', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    await sut.getById(1)
    expect(httpGetClientSpy.url).toBe(`${String(import.meta.env.VITE_EQUIPAMENTO_URL)}/bicicleta/1`)
  })

  it('should return a bicicleta if HttpGetClient returns 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 200,
      body: bicicletaObj
    }
    const bicicleta = await sut.getById(1)
    expect(bicicleta).toBeTruthy()
  })

  it('should throw if HttpGetClient does not return 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: 404,
      body: undefined
    }
    const promise = sut.getById(1)
    await expect(promise).rejects.toThrow(new Error('Algo inesperado aconteceu.'))
  })
})
