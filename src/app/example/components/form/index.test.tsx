import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Provider } from '@ui/components/provider'

import Form from './index'

const onSubmitMock = vi.fn()

const renderComponent = () => {
  const queryClient = new QueryClient()

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
    const component = renderComponent()

    expect(component).toBeTruthy()
  })

  it('should show error message', async () => {
    renderComponent()

    await userEvent.click(screen.getByTestId('button--submit'))

    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    expect(await screen.findByText('Age is required')).toBeInTheDocument()
  })

  it('should submit data', async () => {
    renderComponent()

    await userEvent.type(screen.getByTestId('input--name'), 'test')
    await userEvent.type(screen.getByTestId('input--age'), '20')

    await userEvent.click(screen.getByTestId('button--submit'))

    expect(onSubmitMock).toHaveBeenCalledWith({
      name: 'test',
      age: '20',
    })
  })
})
