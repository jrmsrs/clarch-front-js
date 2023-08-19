import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { Bicicleta } from '@/presentation/pages'
import { makePageSut } from '@/presentation/test'
import { BicicletasQuerySpy } from '@/presentation/pages/tests/mock-bicicletas-query'
import { faker } from '@faker-js/faker'

describe('Bicicleta Page', () => {
  afterEach(cleanup)

  it('should render with initial state', () => {
    const bicicletaId = faker.number.int()
    const { sut } = makePageSut(<Bicicleta query={
      new BicicletasQuerySpy({ bicicletaId })
    } />, '/:bicicletaId', `/${bicicletaId}`)
    expect(sut.getByLabelText('heading')).toBeVisible()
    expect(sut.getByLabelText('heading')).toHaveTextContent(`Bicicleta ID-${bicicletaId}`)
  })
})
