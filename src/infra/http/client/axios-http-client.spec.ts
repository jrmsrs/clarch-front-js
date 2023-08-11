import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AxiosHttpClient } from './axios-http-client'
import { mockAxios, mockGetRequest } from '@/infra/test'
import axios from 'axios'

vi.mock('axios')

const makeSut = () => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios(axios)
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call axios with correct values', async () => {
    const request = mockGetRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.get(request)
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url)
  })

  it('should return the correct statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const response = await sut.get(mockGetRequest())
    expect(response.body).toEqual(mockedAxios.get.mock.results[0].value.data)
    expect(response.statusCode).toBe(mockedAxios.get.mock.results[0].value.status)
  })
})
