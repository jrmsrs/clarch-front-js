import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { Router as RouterProv } from '.'

describe('Router', () => {
  afterEach(cleanup)

  it('should render without crashing', () => {
    const sut = render(<RouterProv />)
    expect(sut).toBeTruthy()
  })
})
