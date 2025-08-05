import { parseURL } from 'ufo'

export function getRootUrl(url: string): string {
  const parsed = parseURL(url)

  return `${parsed.protocol}//${parsed.host?.split('/')[0] || ''}`
}
