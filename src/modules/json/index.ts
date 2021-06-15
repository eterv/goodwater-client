export function fromJson<T = any>(json: string | null): T | null {
  if (typeof json !== 'string') return null
  try {
    return JSON.parse(json)
  } catch (err) {
    return null
  }
}

export function toJson(data: any): string {
  return JSON.stringify(data)
}
