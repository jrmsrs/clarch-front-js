import '@testing-library/jest-dom'
import { cleanup, waitForElementToBeRemoved } from '@testing-library/react'
import { Bicicleta } from '@/presentation/pages'
import { makePageSut } from '@/presentation/test'
import { BicicletasQuerySpy } from '@/presentation/pages/tests/mock-bicicletas-query'
import { faker } from '@faker-js/faker'

const awaitPageLoad = async (sut: any) => {
  await waitForElementToBeRemoved(() => sut.getByLabelText('loading'))
}

describe('Bicicleta Page', () => {
  afterEach(cleanup)

  it('should render with initial state', async () => {
    const bicicletaId = faker.number.int()
    const { sut } = makePageSut(<Bicicleta query={
      new BicicletasQuerySpy({ bicicletaId })
    } />, '/:bicicletaId', `/${bicicletaId}`)
    expect(sut.getByLabelText('heading')).toBeVisible()
    expect(sut.getByLabelText('heading')).toHaveTextContent(`Bicicleta ID-${bicicletaId}`)
    expect(sut.getByLabelText('loading')).toBeVisible()
    await awaitPageLoad(sut)
  })

  it('should render with error state', async () => {
    const bicicletaId = faker.number.int()
    const errorMsg = faker.lorem.sentence()
    const { sut } = makePageSut(<Bicicleta query={
      new BicicletasQuerySpy({ bicicletaId, errorMsg })
    } />, '/:bicicletaId', `/${bicicletaId}`)
    await awaitPageLoad(sut)
    expect(sut.getByLabelText('error')).toBeVisible()
    expect(sut.getByLabelText('error').textContent).toBe(errorMsg)
  })

  it('should render with success state', async () => {
    const bicicletaId = faker.number.int()
    const { sut } = makePageSut(<Bicicleta query={
      new BicicletasQuerySpy({ bicicletaId })
    } />, '/:bicicletaId', `/${bicicletaId}`)
    await awaitPageLoad(sut)
    expect(sut.getByLabelText('bicicleta')).toBeVisible()
    expect(sut.getByLabelText('bicicleta-modelo')).toBeVisible()
    expect(sut.getByLabelText('bicicleta-marca')).toBeVisible()
    expect(sut.getByLabelText('bicicleta-numero')).toBeVisible()
    expect(sut.getByLabelText('bicicleta-ano')).toBeVisible()
    expect(sut.getByLabelText('bicicleta-status')).toBeVisible()
  })
})
