import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'

async function enableMocking() {
  if (import.meta.env.MODE !== 'mock') {
    return
  }

  const { worker } = await import('./mocks/browser')

  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
