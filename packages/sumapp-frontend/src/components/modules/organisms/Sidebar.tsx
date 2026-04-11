import SupermarketListForm from '@modules/molecules/SupermarketListForm'
import { Separator } from '@shadcn/separator'
import AddProductForm from '@modules/molecules/AddProductForm'

const Sidebar = () => {
  return (
    <section className="flex-1 dark:bg-zinc-900 bg-zinc-100 flex flex-col gap-5 px-6 py-5">
      <SupermarketListForm />
      <Separator />
      <AddProductForm />
    </section>
  )
}

export default Sidebar
