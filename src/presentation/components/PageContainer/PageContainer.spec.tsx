import { cleanup } from '@testing-library/react'
import { PageContainer } from '@/presentation/components'
import { makeComponentSut } from '@/presentation/test'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('Page Container', () => {
  it('should render with initial state', () => {
    const { sut } = makeComponentSut(<PageContainer />)
    expect(sut.getByLabelText('container')).toBeVisible()
    expect(sut.getByLabelText('header')).toBeVisible()
    expect(sut.getByLabelText('navlink-home')).toBeVisible()
    expect(sut.getByLabelText('decorative-buttons')).toBeVisible()
  })
})
