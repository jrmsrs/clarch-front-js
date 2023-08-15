export class UnexpectedError extends Error {
  constructor (entity: string) {
    super(`ocorreu algo inesperado ao processar ${entity}`)
    this.name = 'UnexpectedError'
  }
}
