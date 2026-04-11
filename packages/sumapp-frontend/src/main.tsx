import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from '@components/routers/router'
import ThemeProvider from '@components/providers/ThemeProvider'
import CurrentListProvider from '@components/providers/CurrentListProvider'
import SupermarketListsProvider from '@components/providers/SupermarketListsProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <CurrentListProvider defaultCurrentList={[]} key="current-list">
        <SupermarketListsProvider
          defaultSupermarketLists={[]}
          key="supermarket-lists"
        >
          <RouterProvider router={router} />
        </SupermarketListsProvider>
      </CurrentListProvider>
    </ThemeProvider>
  </StrictMode>
)
