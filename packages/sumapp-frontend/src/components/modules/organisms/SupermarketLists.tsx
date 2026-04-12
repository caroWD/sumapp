import useSupermarketLists from '@/components/hooks/useSupermarketLists'
import SupermarketListsEmpty from './SupermarketListsEmpty'
import SummarySupermarketLists from '@modules/molecules/SummarySupermarketLists'
import SupermarketListsTable from '@modules/molecules/SupermarketListsTable'

const SupermarketLists = () => {
  const { supermarketLists } = useSupermarketLists()

  return (
    <section className="flex flex-col w-full">
      <SummarySupermarketLists />
      <>
        {!supermarketLists.length ? (
          <SupermarketListsEmpty />
        ) : (
          <SupermarketListsTable />
        )}
      </>
    </section>
  )
}

export default SupermarketLists
