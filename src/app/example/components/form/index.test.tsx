import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Provider } from '@ui/components/provider'

import Form from './index'

const onSubmitMock = vi.fn()

const renderComponent = (queryClient: QueryClient) => {
  return render(
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Form onSubmit={onSubmitMock} />
      </QueryClientProvider>
    </Provider>,
  )
}

describe('<Form  />', () => {
  it('should render component', () => {
    const queryClient = new QueryClient()

    const component = renderComponent(queryClient)

    expect(component).toBeTruthy()
  })

  it('should show error message', async () => {
    const queryClient = new QueryClient()

    renderComponent(queryClient)

    const user = userEvent.setup()

    await user.click(screen.getByTestId('button--submit'))

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Age is required')).toBeInTheDocument()
    })
  })

  it('should submit data', async () => {
    const queryClient = new QueryClient()

    renderComponent(queryClient)

    const user = userEvent.setup()

    await user.type(screen.getByTestId('input--name'), 'test')
    await user.type(screen.getByTestId('input--age'), '20')

    await user.click(screen.getByTestId('button--submit'))

    await waitFor(() =>
      expect(onSubmitMock).toHaveBeenCalledWith({
        name: 'test',
        age: '20',
      }),
    )
  })
})
