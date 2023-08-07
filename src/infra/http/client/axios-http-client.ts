import type { HttpGetClient, HttpGetParams, HttpResponse } from '@/data/http'
import axios from 'axios'

export class AxiosHttpClient<R> implements HttpGetClient<R> {
  async get (params: HttpGetParams): Promise<HttpResponse<R>> {
    const { data, status } = await axios.get<R>(params.url)
    return {
      statusCode: status,
      body: data
    }
  }
}
