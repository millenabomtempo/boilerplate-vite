import { getAxios } from '@shared/hooks/useAxios'
import { IExample } from '@shared/interfaces/example'
import { ENDPOINTS } from '@shared/services/endpoints'

export const getExample = async (): Promise<IExample[]> => {
  const api = getAxios()

  const response = await api.get(ENDPOINTS.home)

  return response.data
}
