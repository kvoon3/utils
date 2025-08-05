import { describe, expect, it } from 'vitest'
import { getRootUrl } from './url.ts'

describe('url', () => {
  it('get root host', () => {
    expect(getRootUrl('https://kvoon.me/subpath/#/?q=foo')).toBe('https://kvoon.me')
  })
})
