import { normalizeClass } from 'vue'

export function clsx(...args: unknown[]): string {
  return normalizeClass(args)
}
