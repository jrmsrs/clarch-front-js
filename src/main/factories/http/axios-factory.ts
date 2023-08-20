import { AxiosHttpClient } from '@/infra/http'
import type { Bicicleta } from '@/domain/models'

export const makeAxiosHttpClient = () => new AxiosHttpClient<Bicicleta>()
