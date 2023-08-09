import type { HttpGetClient, HttpGetParams, HttpResponse } from '@/data/http'
import { HttpStatusCode } from '@/data/http'

export class HttpGetClientSpy<T> implements HttpGetClient<T> {
  url?: string
  response: HttpResponse<T> = {
    statusCode: HttpStatusCode.ok
  }

  async get (params: HttpGetParams): Promise<HttpResponse<T>> {
    this.url = params.url
    return this.response
  }
}
