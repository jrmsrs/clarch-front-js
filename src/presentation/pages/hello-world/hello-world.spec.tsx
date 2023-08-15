import '@testing-library/jest-dom'
import { cleanup, fireEvent } from '@testing-library/react'
import { HelloWorld } from '@/presentation/pages'
import { makePageSut } from '@/presentation/test'

describe('Hello World Page', () => {
  afterEach(cleanup)

  it('should render with initial state', () => {
    const { sut } = makePageSut(<HelloWorld />)
    expect(sut.getByLabelText('heading')).toHaveTextContent('Hello World!')
    expect(sut.getByLabelText('counter')).toHaveTextContent('count is 0')
  })

  it('should increment counter on button click', () => {
    const { sut } = makePageSut(<HelloWorld />)
    const counter = sut.getByLabelText('counter')
    fireEvent.click(counter)
    expect(counter).toHaveTextContent('count is 1')
    fireEvent.click(counter)
    expect(counter).toHaveTextContent('count is 2')
  })
})
