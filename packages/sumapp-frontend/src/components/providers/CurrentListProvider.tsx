import { type ReactNode, useState, useEffect } from 'react'
import CurrentListProviderContext, {
  type CurrentListProviderState,
} from '@components/contexts/CurrentListProviderContext'
import type Product from '@/lib/models/Product'

interface CurrentListProviderProps {
  children: ReactNode
  defaultCurrentList?: Product[]
  key?: string
}

const CurrentListProvider = ({
  children,
  defaultCurrentList = [],
  key = 'current-list',
  ...props
}: CurrentListProviderProps) => {
  const [currentList, setCurrentList] = useState<Product[]>(
    () =>
      (JSON.parse(localStorage.getItem(key) || '[]') as Product[]) ||
      defaultCurrentList
  )

  useEffect(() => {
    const fetchData = () => {
      const response: string | null = localStorage.getItem(key)

      if (!response) {
        setCurrentList([])
        return
      }

      const jsonData = JSON.parse(response) as Product[]

      setCurrentList(jsonData)
    }

    fetchData()
  }, [key])

  const value: CurrentListProviderState = {
    currentList,
    setCurrentList: (currentList: Product[]) => {
      localStorage.setItem(key, JSON.stringify(currentList))
      setCurrentList(currentList)
    },
  }

  return (
    <CurrentListProviderContext.Provider {...props} value={value}>
      {children}
    </CurrentListProviderContext.Provider>
  )
}

export default CurrentListProvider
