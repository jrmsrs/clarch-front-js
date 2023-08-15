export class NoContentFoundError extends Error {
  constructor (entity: string) {
    super(`nenhum(a) ${entity.toLowerCase()} encontrado(a)`)
    this.name = 'NoContentFoundError'
  }
}
