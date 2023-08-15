export class NotFoundError extends Error {
  constructor (entity: string) {
    super(`${entity.toLowerCase()} not found`)
    this.name = 'NotFoundError'
  }
}
