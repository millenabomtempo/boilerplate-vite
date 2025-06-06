import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import List from './index'

const renderComponent = () => {
  const queryClient = new QueryClient()

  return render(
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>,
  )
}

describe('<List  />', () => {
  it('should render page', () => {
    const component = renderComponent()

    expect(component).toBeTruthy()
  })

  it('should show error message', async () => {
    renderComponent()

    expect(await screen.findByTestId('text--title')).toBeInTheDocument()

    userEvent.click(await screen.findByTestId('button--submit'))

    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    expect(await screen.findByText('Age is required')).toBeInTheDocument()
  })

  it('should call onSubmit when form is submitted', async () => {
    const user = userEvent.setup()
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    renderComponent()

    expect(await screen.findByTestId('text--title')).toBeInTheDocument()

    await user.type(screen.getByTestId('input--name'), 'John Doe')
    await user.type(screen.getByTestId('input--age'), '20')

    await user.click(screen.getByTestId('button--submit'))

    const expected = { data: { name: 'John Doe', age: '20' } }

    expect(logSpy).toHaveBeenCalledWith(expected)

    logSpy.mockRestore()
  })
})
