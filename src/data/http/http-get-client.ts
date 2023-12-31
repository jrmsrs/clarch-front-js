import type { HttpResponse } from '.'

export type HttpGetParams = {
  url: string
}

export interface HttpGetClient<R> {
  get: (params: HttpGetParams) => Promise<HttpResponse<R>>
}
