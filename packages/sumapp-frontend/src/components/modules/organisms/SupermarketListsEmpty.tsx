import { ShoppingCart } from 'lucide-react'
import { Button } from '@shadcn/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@shadcn/empty'
import { NavLink } from 'react-router'

const SupermarketListsEmpty = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ShoppingCart />
        </EmptyMedia>
        <EmptyTitle>Aún no hay listas de supermercado</EmptyTitle>
        <EmptyDescription>
          Aún no has creado ningún lista de supermercado. Empieza creando tu
          primer lista.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>
          <NavLink to="/agregar-lista" viewTransition>
            Agregar lista
          </NavLink>
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export default SupermarketListsEmpty
