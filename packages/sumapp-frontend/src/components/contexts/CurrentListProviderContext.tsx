import { createContext } from 'react'
import type Product from '@/lib/models/Product'

export interface CurrentListProviderState {
  currentList: Product[]
  setCurrentList: (currentList: Product[]) => void
}

const initialState: CurrentListProviderState = {
  currentList: [],
  setCurrentList: () => null,
}

const CurrentListProviderContext =
  createContext<CurrentListProviderState>(initialState)

export default CurrentListProviderContext
