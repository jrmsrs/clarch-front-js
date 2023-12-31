import { cleanup } from '@testing-library/react'
import { Main } from '@/presentation/pages'
import { makePageSut } from '@/presentation/test'
import '@testing-library/jest-dom'

describe('Main Page', () => {
  afterEach(cleanup)

  it('should render with initial state', () => {
    const { sut } = makePageSut(<Main />)
    expect(sut.getByLabelText('navlinks')).toBeVisible()
  })
})
