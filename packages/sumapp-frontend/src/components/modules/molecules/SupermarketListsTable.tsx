import { Edit, Trash } from 'lucide-react'
import { Button } from '@shadcn/button'
import { ButtonGroup, ButtonGroupSeparator } from '@shadcn/button-group'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shadcn/table'
import useSupermarketLists from '@/components/hooks/useSupermarketLists'
import { formatMoney, formatDate } from '@/lib/utils'
import type SupermarketList from '@/lib/models/SupermarketList'

const SupermarketListsTable = () => {
  const { supermarketLists, setSupermarketLists } = useSupermarketLists()

  const removeSupermarketList = (id: string): void => {
    const supermarketListsFiltered: SupermarketList[] = supermarketLists.filter(
      (sl) => sl.id !== id
    )

    setSupermarketLists(supermarketListsFiltered)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pl-6">Item</TableHead>
          <TableHead>Supermercado</TableHead>
          <TableHead>Productos</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead className="pr-6 text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {supermarketLists.map((sl, i) => (
          <TableRow key={sl.id}>
            <TableCell className="pl-6">{i + 1}</TableCell>
            <TableCell className="font-medium capitalize">
              {sl.supermarket === 'exito'
                ? 'éxito'
                : sl.supermarket === 'euro'
                  ? 'EURO'
                  : sl.supermarket === 'supermu'
                    ? 'supermú'
                    : sl.supermarket}
            </TableCell>
            <TableCell>
              {sl.products.map((p) => p.amount).reduce((a, c) => a + c, 0)}
            </TableCell>
            <TableCell>
              $
              {formatMoney(
                sl.products.map((p) => p.subtotal).reduce((a, c) => a + c, 0)
              )}
            </TableCell>
            <TableCell>{formatDate(new Date(sl.purchasedAt))}</TableCell>
            <TableCell className="pr-6">
              <ButtonGroup className="w-full justify-end">
                <Button
                  variant="destructive"
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => removeSupermarketList(sl.id)}
                >
                  <Trash className="size-3.5" />
                  Eliminar
                </Button>
                <ButtonGroupSeparator />
                <Button
                  variant="secondary"
                  size="sm"
                  className="cursor-pointer"
                >
                  <Edit className="size-3.5" />
                  Editar
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default SupermarketListsTable
