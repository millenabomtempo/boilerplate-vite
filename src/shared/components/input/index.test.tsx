import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Provider } from '@ui/components/provider'

import Input from './index'

const renderComponent = (queryClient: QueryClient) => {
  return render(
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Input />
      </QueryClientProvider>
    </Provider>,
  )
}

describe('<Input  />', () => {
  it('should render component', () => {
    const queryClient = new QueryClient()

    const component = renderComponent(queryClient)

    expect(component).toBeTruthy()
  })
})
