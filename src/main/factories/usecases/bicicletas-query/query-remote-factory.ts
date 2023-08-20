import { RemoteBicicletasQuery } from '@/data/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-factory'

export const makeRemoteBicicletasQuery = () => new RemoteBicicletasQuery(makeAxiosHttpClient())
