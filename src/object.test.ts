import { describe, expect, it } from 'vitest'
import { clearNull } from './object.ts'

describe('object', () => {
  it('clearNull', () => {
    const obj = clearNull({
      foo: null,
      bar: 'baz',
    })

    expect(obj).toEqual({ bar: 'baz' })
    expect(obj.foo).toBe(undefined)
  })
})
