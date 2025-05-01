import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { lazy } from 'react'
import { describe, expect, it, vi } from 'vitest'

const List = lazy(() => import('./index'))

const renderComponent = (queryClient: QueryClient) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>,
  )
}

describe('<List  />', () => {
  it('should render page', () => {
    const queryClient = new QueryClient()

    const component = renderComponent(queryClient)

    expect(component).toBeTruthy()
  })

  it('should show error message', async () => {
    const user = userEvent.setup()
    const queryClient = new QueryClient()

    renderComponent(queryClient)

    await waitFor(() => {
      expect(screen.getByTestId('text--title')).toBeInTheDocument()
    })

    await user.click(screen.getByTestId('button--submit'))

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Age is required')).toBeInTheDocument()
    })
  })

  it('should call onSubmit when form is submitted', async () => {
    const user = userEvent.setup()
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const queryClient = new QueryClient()

    renderComponent(queryClient)

    await waitFor(() => {
      expect(screen.getByTestId('text--title')).toBeInTheDocument()
    })

    await user.type(screen.getByTestId('input--name'), 'John Doe')
    await user.type(screen.getByTestId('input--age'), '20')

    await user.click(screen.getByTestId('button--submit'))

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith({
        data: expect.objectContaining({
          name: 'John Doe',
          age: '20',
        }),
      })
    })

    logSpy.mockRestore()
  })
})
