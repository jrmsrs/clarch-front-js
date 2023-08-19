import '@testing-library/jest-dom'
import { cleanup, waitForElementToBeRemoved } from '@testing-library/react'
import { Bicicletas } from '@/presentation/pages'
import { makePageSut } from '@/presentation/test'
import { BicicletasQuerySpy } from '../tests/mock-bicicletas-query'
import { faker } from '@faker-js/faker'

const awaitPageLoad = async (sut: any) => {
  await waitForElementToBeRemoved(() => sut.getByLabelText('loading'))
}

describe('Bicicleta Page', () => {
  afterEach(cleanup)

  it('should render with initial state', async () => {
    const numOfBicicletas = faker.number.int(100)
    const { sut } = makePageSut(<Bicicletas query={new BicicletasQuerySpy({ numOfBicicletas })} />)
    expect(sut.getByLabelText('heading')).toBeVisible()
    expect(sut.getByLabelText('loading')).toBeVisible()
    await awaitPageLoad(sut)
  })

  it('should render with error state', async () => {
    const errorMsg = faker.lorem.sentence()
    const { sut } = makePageSut(<Bicicletas query={new BicicletasQuerySpy({ numOfBicicletas: 0, errorMsg })} />)
    await awaitPageLoad(sut)
    expect(sut.getByLabelText('error')).toBeVisible()
    expect(sut.getByLabelText('error').textContent).toBe(errorMsg)
  })

  it('should render with success state', async () => {
    const numOfBicicletas = faker.number.int(100)
    const { sut } = makePageSut(<Bicicletas query={new BicicletasQuerySpy({ numOfBicicletas })} />)
    await awaitPageLoad(sut)
    expect(sut.getByLabelText('list')).toBeVisible()
    expect(sut.getByLabelText('list').children.length).toBe(numOfBicicletas)
  })
})
