export enum HttpStatusCode {
  ok = 200,
  unprocessableEntity = 422,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T | T[]
}
