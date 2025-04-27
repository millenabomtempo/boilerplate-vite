export const getURL = (resource: string) => {
  const base = import.meta.env.VITE_BASE_URL

  return `${base}${resource}`
}
