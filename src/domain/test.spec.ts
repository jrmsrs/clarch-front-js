import { it, expect } from 'vitest'
import { concat } from './test'

it('concacts hello + world', () => {
  expect(concat("hello", "world")).toEqual("hello world");
})
