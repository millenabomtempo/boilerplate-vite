import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Button from './index'

const renderComponent = (queryClient: QueryClient) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Button />
    </QueryClientProvider>,
  )
}

describe('<Button  />', () => {
  it('should render component', () => {
    const queryClient = new QueryClient()

    const component = renderComponent(queryClient)

    expect(component).toBeTruthy()
  })
})
