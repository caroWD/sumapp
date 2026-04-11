import { createContext } from 'react'
import type SupermarketList from '@/lib/models/SupermarketList'

export interface SupermarketListsProviderState {
  supermarketLists: SupermarketList[]
  setSupermarketLists: (supermarketLists: SupermarketList[]) => void
}

const initialState: SupermarketListsProviderState = {
  supermarketLists: [],
  setSupermarketLists: () => null,
}

const SupermarketListsProviderContext =
  createContext<SupermarketListsProviderState>(initialState)

export default SupermarketListsProviderContext
