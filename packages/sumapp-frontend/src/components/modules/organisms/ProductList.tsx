import { Button } from '@shadcn/button'
import { Field } from '@shadcn/field'
import useCurrentList from '@/components/hooks/useCurrentList'
import ProductListTable from '@modules/molecules/ProductListTable'
import ProductListEmpty from './ProductListEmpty'

const ProductList = () => {
  const { currentList, setCurrentList } = useCurrentList()

  const productsAmount: number = currentList
    .map((p) => p.amount)
    .reduce((a, c) => a + c, 0)

  const total: string = currentList
    .map((p) => p.subtotal)
    .reduce((a, c) => a + c, 0)
    .toString()
    .split('')
    .reverse()
    .map((l, i) => ((i + 1) % 4 === 0 ? l + '.' : l))
    .reverse()
    .join('')

  return (
    <section className="flex flex-col flex-3">
      <div className="flex flex-row justify-between gap-4 px-6 py-5 border-b dark:border-zinc-900">
        <ul className="flex-1 flex flex-row items-center gap-8 text-sm">
          <li className="flex flex-row gap-1.5">
            <span>Items:</span>
            <span className="font-bold">{currentList.length}</span>
          </li>
          <li className="flex flex-row gap-1.5">
            <span>Productos:</span>
            <span className="font-bold">{productsAmount}</span>
          </li>
          <li className="flex flex-row gap-1.5">
            <span>Valor total:</span>
            <span className="font-bold">${total}</span>
          </li>
        </ul>
        <Field orientation="horizontal" className="justify-end w-auto">
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer"
            onClick={() => setCurrentList([])}
          >
            Borrar
          </Button>
          <Button
            type="submit"
            className="cursor-pointer"
            form="form-supermarket-list"
          >
            Guardar
          </Button>
        </Field>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        {!currentList.length ? <ProductListEmpty /> : <ProductListTable />}
      </div>
    </section>
  )
}

export default ProductList
