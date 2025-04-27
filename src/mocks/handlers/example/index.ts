import { HttpResponse, http } from 'msw'

import { getURL } from '@mocks/helpers/baseURL'
import { ENDPOINTS } from '@shared/services/endpoints'

import { EXAMPLE_MOCK } from './mock'

const MOCK = EXAMPLE_MOCK

export const exampleHandlers = [
  http.get(getURL(ENDPOINTS.home), () => {
    return HttpResponse.json(MOCK, { status: 200 })
  }),
]
