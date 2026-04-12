import { createBrowserRouter } from 'react-router'
import Home from '@modules/pages/Home'
import AddList from '@modules/pages/AddList'
import Lists from '@modules/pages/Lists'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: '/listas', Component: Lists },
      { path: '/agregar-lista', Component: AddList },
    ],
  },
])

export default router
