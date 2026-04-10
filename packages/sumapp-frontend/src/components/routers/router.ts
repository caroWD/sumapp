import { createBrowserRouter } from 'react-router'
import Home from '@modules/pages/Home'
import AddList from '@modules/pages/AddList'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: '/agregar-lista', Component: AddList },
    ],
  },
])

export default router
