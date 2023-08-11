import type { MockedObject } from 'vitest'
import { faker } from '@faker-js/faker'
import type { AxiosStatic } from 'axios'

type MockedAxios = MockedObject<AxiosStatic>
type MockedAxiosGet = Pick<MockedAxios, 'get'>

export const mockAxios = (axios: AxiosStatic): MockedAxiosGet => {
  const mockedAxios = axios as MockedAxios as MockedAxiosGet
  mockedAxios.get.mockResolvedValue({
    status: Number(faker.string.numeric(3)),
    data: { test: faker.lorem.word() }
  })
  return mockedAxios
}
