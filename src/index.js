import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Loading from './pages/Loading'

import './index.css'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <React.StrictMode>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
)
