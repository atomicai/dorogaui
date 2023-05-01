import { createBrowserRouter } from 'react-router-dom'

import About from '../pages/About'
import Error from '../pages/Error'
import Home from '../pages/Home'

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

export default router
