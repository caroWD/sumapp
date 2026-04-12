import { MoreHorizontal } from 'lucide-react'

import { Button } from '@shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shadcn/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shadcn/table'
import useCurrentList from '@/components/hooks/useCurrentList'
import type Product from '@/lib/models/Product'
import { formatMoney } from '@/lib/utils'

const ProductListTable = () => {
  const { currentList, setCurrentList } = useCurrentList()

  const removeProduct = (id: string): void => {
    const listFiltered: Product[] = currentList.filter((p) => p.id !== id)

    setCurrentList(listFiltered)
  }

  return (
    <Table>
      <TableHeader className="table-header-group">
        <TableRow>
          <TableCell className="pl-6">Item</TableCell>
          <TableHead>Nombre</TableHead>
          <TableHead>Marca</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead>Subtotal</TableHead>
          <TableHead className="text-right pr-6">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentList.map((p, i) => (
          <TableRow key={p.id}>
            <TableCell className="pl-6">{i + 1}</TableCell>
            <TableCell className="font-medium">{p.name}</TableCell>
            <TableCell>{p.brand}</TableCell>
            <TableCell>${formatMoney(p.price)}</TableCell>
            <TableCell>{p.amount}</TableCell>
            <TableCell>${formatMoney(p.subtotal)}</TableCell>
            <TableCell className="text-right pr-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontal />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => removeProduct(p.id)}
                  >
                    Eliminar
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ProductListTable
