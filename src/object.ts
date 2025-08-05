import { isObject, objectKeys } from '@antfu/utils'

export function clearNull<T extends object>(obj: T): T {
  for (const key in obj) {
    if (obj[key] === null)
      delete obj[key]
  }

  return obj as any
}

export function getDeepValue(obj: object): any {
  const get = (obj: object): any => {
    const keys = objectKeys(obj)
    if (keys.length === 1) {
      const value = obj[keys[0]]
      if (isObject(value) && !Array.isArray(value))
        return get(value)
      else
        return value
    }
    else {
      return obj
    }
  }

  return get(obj)
}
