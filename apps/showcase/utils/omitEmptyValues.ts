export const omitEmptyValues = <T extends Record<string, unknown>>(obj: T): Partial<T> => Object.fromEntries(
  Object.entries(obj)
    .filter(([, value]) => value !== null && value !== undefined && value !== '')
) as Partial<T>;
