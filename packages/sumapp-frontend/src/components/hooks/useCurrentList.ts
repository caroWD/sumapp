import { useContext } from 'react'
import CurrentListProviderContext from '@components/contexts/CurrentListProviderContext'

const useCurrentList = () => {
  const context = useContext(CurrentListProviderContext)

  if (context === undefined)
    throw new Error('useCurrentList must be used within a CurrentListProvider')

  return context
}

export default useCurrentList
