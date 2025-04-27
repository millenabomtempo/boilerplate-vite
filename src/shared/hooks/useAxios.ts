import Axios, { AxiosError, AxiosRequestConfig } from 'axios'

interface IAxiosConfig extends AxiosRequestConfig {
  retry?: boolean
}

export function createAxiosInstance() {
  const axios = Axios.create({ baseURL: import.meta.env.VITE_BASE_URL })

  axios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalConfig = error.config as IAxiosConfig

      if (error?.response?.status === 401 && !originalConfig.retry) {
        try {
          originalConfig.retry = true
          await axios(originalConfig)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        }
      }

      return Promise.reject(error)
    },
  )

  return axios
}

export default function useAxios() {
  return createAxiosInstance()
}

export function getAxios() {
  return createAxiosInstance()
}
