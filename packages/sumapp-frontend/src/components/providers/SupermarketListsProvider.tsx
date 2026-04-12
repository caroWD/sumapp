import type SupermarketList from '@/lib/models/SupermarketList'
import { type ReactNode, useState, useEffect } from 'react'
import type { SupermarketListsProviderState } from '../contexts/SupermarketListsProviderContext'
import SupermarketListsProviderContext from '../contexts/SupermarketListsProviderContext'

interface SupermarketListsProviderProps {
  children: ReactNode
  defaultSupermarketLists?: SupermarketList[]
  key?: string
}

const SupermarketListsProvider = ({
  children,
  defaultSupermarketLists = [],
  key = 'supermarket-lists',
  ...props
}: SupermarketListsProviderProps) => {
  const [supermarketLists, setSupermarketLists] = useState<SupermarketList[]>(
    () =>
      (JSON.parse(localStorage.getItem(key) || '[]') as SupermarketList[]) ||
      defaultSupermarketLists
  )

  useEffect(() => {
    const fetchData = () => {
      const response: string | null = localStorage.getItem(key)

      if (!response) {
        setSupermarketLists([])
        return
      }

      const jsonData = JSON.parse(response) as SupermarketList[]

      setSupermarketLists(jsonData)
    }

    fetchData()
  }, [key])

  const value: SupermarketListsProviderState = {
    supermarketLists,
    setSupermarketLists: (supermarketLists: SupermarketList[]) => {
      localStorage.setItem(key, JSON.stringify(supermarketLists))
      setSupermarketLists(supermarketLists)
    },
  }

  return (
    <SupermarketListsProviderContext.Provider {...props} value={value}>
      {children}
    </SupermarketListsProviderContext.Provider>
  )
}

export default SupermarketListsProvider
