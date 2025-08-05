import { isObject, objectKeys } from '@antfu/utils'

export function clearNull<T extends object>(obj: T): T {
  for (const key in obj) {
    if (obj[key] === null)
      delete obj[key]
  }

  return obj as any
}

export function getDeepValue<TValue = any>(obj: object): TValue {
  if (!isObject(obj))
    return obj

  const get = (obj: object): any => {
    const keys = objectKeys(obj)
    if (keys.length !== 1)
      return obj

    const value = obj[keys[0]]
    if (isObject(value) && !Array.isArray(value))
      return get(value)
    else
      return value
  }

  return get(obj)
}
