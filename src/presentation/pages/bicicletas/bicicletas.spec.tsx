import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { Bicicletas } from '@/presentation/pages'
import { makePageSut } from '@/presentation/test'

describe('Bicicleta Page', () => {
  afterEach(cleanup)

  it('should render with initial state', () => {
    const { sut } = makePageSut(<Bicicletas />)
    expect(sut.getByLabelText('heading')).toBeVisible()
    expect(sut.getByLabelText('list')).toBeVisible()
  })
})
