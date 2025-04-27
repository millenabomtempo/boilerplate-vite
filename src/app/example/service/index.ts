import { getAxios } from '@shared/hooks/useAxios'
import { IExample } from '@shared/interfaces/example'

export const getExample = async (): Promise<IExample[]> => {
  const api = getAxios()

  const response = await api.get(
    'https://api.thecatapi.com/v1/images/search?limit=10',
  )

  return response.data
}
