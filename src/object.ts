export function clearNull<T extends object>(obj: T): T {
  for (const key in obj) {
    if (obj[key] === null)
      delete obj[key]
  }

  return obj as any
}
