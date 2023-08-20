import { cleanup, render } from '@testing-library/react'
import { Router as RouterProv } from '.'
import '@testing-library/jest-dom'

describe('Router', () => {
  afterEach(cleanup)

  it('should render without crashing', () => {
    const MountedRouter = () => {
      return <RouterProv
        makeBicicletas={() => <div />}
        makeBicicleta={() => <div />}
      />
    }
    const sut = render(<MountedRouter />)
    expect(sut).toBeTruthy()
  })
})
