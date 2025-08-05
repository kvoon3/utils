import { describe, expect, it } from 'vitest'
import { clearNull, getDeepValue } from './object.ts'

describe('object', () => {
  it('clearNull', () => {
    const obj = clearNull({
      foo: null,
      bar: 'baz',
    })

    expect(obj).toEqual({ bar: 'baz' })
    expect(obj.foo).toBe(undefined)
  })

  it('get deep value', () => {
    expect(getDeepValue({
      foo: {
        bar: {
          baz: {
            key: [42],
          },
        },
      },
    })).toEqual([42])

    expect(getDeepValue({
      foo: {
        bar: {
          baz: {
            foo: ['foo'],
            bar: 'bar',
          },
        },
      },
    })).toEqual({
      foo: ['foo'],
      bar: 'bar',
    })
  })
})
