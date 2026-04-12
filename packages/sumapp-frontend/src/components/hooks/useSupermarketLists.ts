import { useContext } from 'react'
import SupermarketListsProviderContext from '@components/contexts/SupermarketListsProviderContext'

const useSupermarketLists = () => {
  const context = useContext(SupermarketListsProviderContext)

  if (context === undefined)
    throw new Error(
      'useSupermarketLists must be used within a SupermarketListsProvider'
    )

  return context
}

export default useSupermarketLists
